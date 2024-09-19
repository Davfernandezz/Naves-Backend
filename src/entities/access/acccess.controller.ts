import { Request, Response } from 'express';
import { access } from '../access/access'; 
import { room } from '../room/room';
import { IsNull } from 'typeorm';

export const registerEntry = async (req: Request, res: Response) => {
    try {
        // 1. Recuperar la información
        const { room_id } = req.body;
        const person_id = req.tokenData.id;

        // 2. Validar la información
        if (!room_id) {
            return res.status(400).json({
                success: false,
                message: "Room ID is required"
            });
        }
        if (!person_id) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }

        // 3. Verificar si la sala existe
        const roomExists = await room.findOne({ where: { id: room_id } });
        if (!roomExists) {
            return res.status(404).json({
                success: false,
                message: "Room not found"
            });
        }

        // 4. Verificar si el usuario ya tiene una entrada activa
        const activeEntry = await access.findOne({
            where: {
                person_id: person_id,
                state: 'entry',
                exit_datetime: IsNull()
            }
        });
        if (activeEntry) {
            return res.status(400).json({
                success: false,
                message: "User already has an active entry"
            });
        }

        // 5. Crear nuevo registro de entrada
        const currentDate = new Date();
        const newEntry = new access();
        newEntry.person_id = person_id;
        newEntry.room_id = room_id;
        newEntry.entry_datetime = currentDate;
        newEntry.state = 'entry';
        await newEntry.save();

        // 6. Responder
        res.status(201).json({
            success: true,
            message: "Entry registered successfully",
            data: newEntry
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while registering entry",
            error: error
        });
    }
};