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
            message: "Error when registering the entry",
            error: error
        });
    }
};


export const registerExit = async (req: Request, res: Response) => {
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

        // 4. Verificar si el usuario tiene una entrada activa en la sala especificada
        const activeEntry = await access.findOne({
            where: {
                person_id: person_id,
                room_id: room_id,  
                state: 'entry',
                exit_datetime: IsNull()
            }
        });
        if (!activeEntry) {
            return res.status(400).json({
                success: false,
                message: "No active entry found for this room"
            });
        }

        // 5. Registrar la salida
        const currentDate = new Date();
        activeEntry.exit_datetime = currentDate;
        activeEntry.state = 'exit';
        await activeEntry.save();

        // 6. Responder
        res.status(200).json({
            success: true,
            message: "Exit registered successfully",
            data: activeEntry
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error when registering the exit",
            error: error
        });
    }
};


export const currentRoomOccupants = async (req: Request, res: Response) => {
    try {
        const room_id = +req.params.room_id;

        if (isNaN(room_id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid room ID"
            });
        }

        // 1. Verificar si la sala existe
        const roomExists = await room.findOne({ where: { id: room_id } });
        if (!roomExists) {
            return res.status(404).json({
                success: false,
                message: "Room not found"
            });
        }

        // 2. Obtener la lista de accesos activos
        const activeAccesses = await access.find({
            where: {
                room_id: room_id,
                state: 'entry',
                exit_datetime: IsNull()
            },
            relations: ['person']
        });
        if (activeAccesses.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No persons currently in the room",
                data: []
            });
        }

        // 3. Crear una lista de las personas actualmente en la sala
        const occupants = activeAccesses.map(entry => ({
            id: entry.person.id,
            name: entry.person.name,
            surnames: entry.person.surnames,
            email: entry.person.email,
            dni: entry.person.dni
        }));

        // 4. Responder con la lista de personas
        return res.status(200).json({
            success: true,
            message: "Persons currently in the room",
            data: occupants
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error when searching for current occupants",
            error: error
        });
    }
};