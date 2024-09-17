import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";
import { Person1726560167856 } from "./migrations/1726560167856-person";
import { Room1726560205798 } from "./migrations/1726560205798-room";
import { Access1726560218248 } from "./migrations/1726560218248-access";
import { AccessHistory1726563877728 } from "./migrations/1726563877728-accessHistory";
import { Administration1726564013782 } from "./migrations/1726564013782-administration";
import { person } from "./models/person";
import { room } from "./models/room";
import { access } from "./models/access";
import { accessHistory } from "./models/accessHistory";
import { administration } from "./models/administration";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [person, room, access, accessHistory, administration],
    migrations: [Person1726560167856, Room1726560205798, Access1726560218248, AccessHistory1726563877728, Administration1726564013782],
    synchronize: false,
    logging: false,
})