import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";
import { Person1726560167856 } from "./migrations/1726560167856-person";
import { Room1726560205798 } from "./migrations/1726560205798-room";
import { Access1726560218248 } from "./migrations/1726560218248-access";
import { AccessHistory1726560247998 } from "./migrations/1726560247998-access-history";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [],
    migrations: [Person1726560167856, Room1726560205798, Access1726560218248, AccessHistory1726560247998],
    synchronize: false,
    logging: false,
})