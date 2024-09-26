import { access } from "../../entities/access/access";
import { AppDataSource } from "../db";

export const accessSeeder = async () => {
    try {
        await AppDataSource.initialize();
        
        const access1 = new access();
        access1.person_id = 1;
        access1.room_id = 2;
        access1.entry_datetime = new Date();
        access1.exit_datetime = null;
        access1.state = "active";
        await access1.save();

        const access2 = new access();
        access2.person_id = 5;
        access2.room_id = 1;
        access2.entry_datetime = new Date("2024-09-23T10:00:00");
        access2.exit_datetime = new Date("2024-09-23T12:30:00");
        access2.state = "inactive";
        await access2.save();

        const access3 = new access();
        access3.person_id = 3;
        access3.room_id = 3;
        access3.entry_datetime = new Date();
        access3.exit_datetime = null;
        access3.state = "active";
        await access3.save();

        const access4 = new access();
        access4.person_id = 4;
        access4.room_id = 5;
        access4.entry_datetime = new Date("2024-09-25T09:30:00");
        access4.exit_datetime = new Date("2024-09-25T11:45:00");
        access4.state = "inactive";
        await access4.save();

        const access5 = new access();
        access5.person_id = 2;
        access5.room_id = 4;
        access5.entry_datetime = new Date();
        access5.exit_datetime = null;
        access5.state = "active";
        await access5.save();

        const access6 = new access();
        access6.person_id = 6;
        access6.room_id = 2;
        access6.entry_datetime = new Date("2024-09-27T10:00:00");
        access6.exit_datetime = new Date("2024-09-27T12:00:00");
        access6.state = "inactive";
        await access6.save();

        const access7 = new access();
        access7.person_id = 7;
        access7.room_id = 1;
        access7.entry_datetime = new Date();
        access7.exit_datetime = null;
        access7.state = "active";
        await access7.save();

        const access8 = new access();
        access8.person_id = 8;
        access8.room_id = 3;
        access8.entry_datetime = new Date("2024-09-29T14:30:00");
        access8.exit_datetime = new Date("2024-09-29T16:00:00");
        access8.state = "inactive";
        await access8.save();

        const access9 = new access();
        access9.person_id = 9;
        access9.room_id = 4;
        access9.entry_datetime = new Date();
        access9.exit_datetime = null;
        access9.state = "active";
        await access9.save();

        const access10 = new access();
        access10.person_id = 10;
        access10.room_id = 5;
        access10.entry_datetime = new Date("2024-09-01T08:45:00");
        access10.exit_datetime = new Date("2024-09-01T10:30:00");
        access10.state = "inactive";
        await access10.save();

        const access11 = new access();
        access11.person_id = 11;
        access11.room_id = 6;
        access11.entry_datetime = new Date();
        access11.exit_datetime = null;
        access11.state = "active";
        await access11.save();

        const access12 = new access();
        access12.person_id = 12;
        access12.room_id = 1;
        access12.entry_datetime = new Date("2024-09-03T10:15:00");
        access12.exit_datetime = new Date("2024-09-03T12:00:00");
        access12.state = "inactive";
        await access12.save();

        const access13 = new access();
        access13.person_id = 13;
        access13.room_id = 2;
        access13.entry_datetime = new Date();
        access13.exit_datetime = null;
        access13.state = "active";
        await access13.save();

        const access14 = new access();
        access14.person_id = 14;
        access14.room_id = 3;
        access14.entry_datetime = new Date("2024-09-05T14:00:00");
        access14.exit_datetime = new Date("2024-09-05T16:30:00");
        access14.state = "inactive";
        await access14.save();

        const access15 = new access();
        access15.person_id = 15;
        access15.room_id = 4;
        access15.entry_datetime = new Date();
        access15.exit_datetime = null;
        access15.state = "active";
        await access15.save();

        console.log("===========================");
        console.log("Access seeder executed successfully");
        console.log("===========================");
        
    } catch (error: any) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("==========================");
        console.error('ERROR ACCESS SEEDER', message);
        console.error("==========================");

    } finally {
        await AppDataSource.destroy();
    }
}