import { Request, Response } from 'express';
import { access } from '../access/access'; 
import { room } from '../room/room';
import { IsNull } from 'typeorm';

export const getCurrentRoomStatus = async (req: Request, res: Response) => {
    try {
        const room_id = +req.params.id;

        if (isNaN(room_id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid room ID"
            });
        }

        // 1. Obtener información de la sala
        const roomInfo = await room.findOne({ 
            where: { id: room_id },
            select: ['id', 'room_name', 'capacity', 'room_type']
        });
        if (!roomInfo) {
            return res.status(404).json({
                success: false,
                message: "Room not found"
            });
        }

        // 2. Obtener la lista de personas actualmente en la sala
        const currentOccupants = await access.find({
            where: {
                room_id: room_id,
                state: 'active',
                exit_datetime: IsNull()
            },
            relations: ['person']
        });

        // 3. Crear la lista de personas presentes
        const occupantsList = currentOccupants.map(entry => ({
            id: entry.person.id,
            name: entry.person.name,
            surnames: entry.person.surnames,
            email: entry.person.email,
            dni: entry.person.dni
        }));

        // 4. Preparar la respuesta
        const roomStatus = {
            id: roomInfo.id,
            room_name: roomInfo.room_name,
            capacity: roomInfo.capacity,
            room_type: roomInfo.room_type,
            current_occupancy: occupantsList.length,
            occupants: occupantsList
        };

        // 5. Enviar la respuesta
        return res.status(200).json({
            success: true,
            message: "Room status retrieved successfully",
            data: roomStatus
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error getting room status",
            error: error
        });
    }
};