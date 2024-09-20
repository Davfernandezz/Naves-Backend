import { Request, Response } from 'express';
import { access } from '../access/access'; 
import { person } from '../person/person';
import { IsNull } from 'typeorm';

export const getCurrentAccess = async (req: Request, res: Response) => {
    try {
        const person_id = +req.params.id;

        if (isNaN(person_id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid person ID"
            });
        }

        // 1. Verificar si la persona existe
        const personInfo = await person.findOne({ 
            where: { id: person_id },
            select: ['id', 'name', 'surnames', 'email', 'dni']
        });

        if (!personInfo) {
            return res.status(404).json({
                success: false,
                message: "Person not found"
            });
        }

        // 2. Obtener el acceso actual de la persona
        const currentAccess = await access.findOne({
            where: {
                person_id: person_id,
                state: 'entry',
                exit_datetime: IsNull()
            },
            relations: ['room']
        });

        // 3. Preparar la respuesta
        let accessInfo;
        if (currentAccess) {
            accessInfo = {
                access_id: currentAccess.id,
                room_id: currentAccess.room.id,
                room_name: currentAccess.room.room_name,
                entry_datetime: currentAccess.entry_datetime
            };
        }
        const response = {
            person: personInfo,
            current_access: accessInfo || null
        };

        // 4. Enviar la respuesta
        return res.status(200).json({
            success: true,
            message: "Current access retrieved successfully",
            data: response
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error getting current access",
            error: error
        });
    }
};