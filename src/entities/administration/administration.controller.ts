
import { Request, Response } from 'express';
import { Between, IsNull, Not } from "typeorm";
import { administration } from "./administration";
import { access } from "../access/access";
import { person } from '../person/person';


export const generateDailyReport = async (req: Request, res: Response) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        // 1. Obtener los accesos del día con detalles
        const accesses = await access.find({
            where: {
                entry_datetime: Between(today, tomorrow),
                exit_datetime: Not(IsNull()),
            },
            relations: ['person', 'room']
        });

        const totalAccesses = accesses.length;

        // 2. Obtener las ausencias (reservas canceladas) con detalles
        const absences = await access.find({
            where: {
                entry_datetime: Between(today, tomorrow),
                state: 'cancelled'
            },
            relations: ['person', 'room']
        });

        const totalAbsences = absences.length;

        // 3. Obtener todos los usuarios con actividad en el día
        const allActiveUsers = await access.createQueryBuilder("access")
            .select("access.person_id", "userId")
            .addSelect("COUNT(*)", "accessCount")
            .addSelect("person.name", "name")
            .addSelect("person.surnames", "surnames")
            .innerJoin("access.person", "person")
            .where("access.entry_datetime BETWEEN :start AND :end", { start: today, end: tomorrow })
            .groupBy("access.person_id")
            .addGroupBy("person.name")
            .addGroupBy("person.surnames")
            .orderBy("accessCount", "DESC")
            .getRawMany();

        // 4. Separar usuarios frecuentes e infrecuentes
        const frequentUsers = allActiveUsers.filter(user => parseInt(user.accessCount) > 1);
        const infrequentUsers = allActiveUsers.filter(user => parseInt(user.accessCount) <= 1);

        // 6. Preparar datos detallados para la respuesta
        const detailedReport = {
            report_date: today,
            total_accesses: totalAccesses,
            total_absences: totalAbsences,
            accesses: accesses.map(a => ({
                person: `${a.person.name} ${a.person.surnames}`,
                room: a.room.room_name,
                entry_time: a.entry_datetime,
                exit_time: a.exit_datetime
            })),
            absences: absences.map(a => ({
                person: `${a.person.name} ${a.person.surnames}`,
                room: a.room.room_name,
                scheduled_entry_time: a.entry_datetime,
            })),
            frequent_users: frequentUsers.map(u => ({
                name: `${u.name} ${u.surnames}`,
                accessCount: parseInt(u.accessCount)
            })),
            infrequent_users: infrequentUsers.map(u => ({
                name: `${u.name} ${u.surnames}`,
                accessCount: parseInt(u.accessCount)
            }))
        };

        // 7. Guardar el informe en la base de datos
        const newReport = new administration();
        newReport.report_date = today;
        newReport.total_accesses = totalAccesses;
        newReport.total_absences = totalAbsences;
        newReport.frequent_users = JSON.stringify(detailedReport.frequent_users);
        newReport.infrequent_users = JSON.stringify(detailedReport.infrequent_users);
        await newReport.save();

        // 8. Responder
        res.status(201).json({
            success: true,
            message: "Daily report generated and saved successfully",
            data: detailedReport
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error generating daily report",
            error: error
        });
    }
};