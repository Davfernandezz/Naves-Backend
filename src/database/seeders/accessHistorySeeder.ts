import { accessHistory } from "../../entities/accessHistory/accessHistory";
import { AppDataSource } from "../db";

export const accessHistorySeeder = async () => {
    try {
        await AppDataSource.initialize();

        const accessHistory1 = new accessHistory();
        accessHistory1.person_id = 1;
        accessHistory1.room_id = 2;
        accessHistory1.entry_datetime = new Date("2024-09-23T10:00:00");
        accessHistory1.exit_datetime = new Date("2023-09-23T12:30:00");
        await accessHistory1.save();

        const accessHistory2 = new accessHistory();
        accessHistory2.person_id = 5;
        accessHistory2.room_id = 1;
        accessHistory2.entry_datetime = new Date("2024-09-23T10:00:00");
        accessHistory2.exit_datetime = new Date("2023-09-23T12:30:00");
        await accessHistory2.save();

        const accessHistory3 = new accessHistory();
        accessHistory3.person_id = 4;
        accessHistory3.room_id = 5;
        accessHistory3.entry_datetime = new Date("2024-09-25T09:30:00");
        accessHistory3.exit_datetime = new Date("2023-09-25T11:45:00");
        await accessHistory3.save();

        const accessHistory4 = new accessHistory();
        accessHistory4.person_id = 6;
        accessHistory4.room_id = 2;
        accessHistory4.entry_datetime = new Date("2024-09-27T10:00:00");
        accessHistory4.exit_datetime = new Date("2024-09-27T12:00:00");
        await accessHistory4.save();

        const accessHistory5 = new accessHistory();
        accessHistory5.person_id = 8;
        accessHistory5.room_id = 3;
        accessHistory5.entry_datetime = new Date("2024-09-29T14:30:00");
        accessHistory5.exit_datetime = new Date("2024-09-29T16:00:00");
        await accessHistory5.save();

        const accessHistory6 = new accessHistory();
        accessHistory6.person_id = 10;
        accessHistory6.room_id = 5;
        accessHistory6.entry_datetime = new Date("2024-09-01T08:45:00");
        accessHistory6.exit_datetime = new Date("2024-09-01T10:30:00");
        await accessHistory6.save();

        const accessHistory7 = new accessHistory();
        accessHistory7.person_id = 12;
        accessHistory7.room_id = 1;
        accessHistory7.entry_datetime = new Date("2024-09-03T10:15:00");
        accessHistory7.exit_datetime = new Date("2024-09-03T12:00:00");
        await accessHistory7.save();

        const accessHistory8 = new accessHistory();
        accessHistory8.person_id = 14;
        accessHistory8.room_id = 3;
        accessHistory8.entry_datetime = new Date("2024-09-05T14:00:00");
        accessHistory8.exit_datetime = new Date("2024-09-05T16:30:00");
        await accessHistory8.save();

        console.log("===========================");
        console.log("Access History seeder executed successfully");
        console.log("===========================");
        
    } catch (error: any) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("==========================");
        console.error('ERROR ACCESS HISTORY SEEDER', message);
        console.error("==========================");

    } finally {
        await AppDataSource.destroy();
    }
}