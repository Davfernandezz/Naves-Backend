
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

        // 1. Obtener el total de accesos del día
        const totalAccesses = await access.count({
            where: {
                entry_datetime: Between(today, tomorrow),
                exit_datetime: Not(IsNull())
            }
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