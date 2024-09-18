import { Request, Response } from "express";
import { person } from "../person/person";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
    try {

        // 1.recuperar la informacion
        const { email, password, name, surnames, startup, dni, phone, role } = req.body;

        // 2. Validar la información
        if (!email || !password || !name || !surnames || !dni) {
            return res.status(400).json({
                success: false,
                message: "Name, surnames, email, password, and DNI are required",
            });
        }
        if (password.length < 9 || password.length > 17) {
            return res.status(400).json({
                success: false,
                message: "Password must be between 9 and 17 characters",
            });
        }

        // 3. Encriptar la contraseña
        const hashedPassword = bcrypt.hashSync(password, 10);

        // 4. Guardar en la base de datos
        const newUser = await person.create({
            email,
            password: hashedPassword,
            name,
            surnames,
            startup,
            dni,
            phone,
            role: role || 'user',
        }).save();

        // 5. Responder
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "User cannot be registered",
            error: error,
        });
    }
};