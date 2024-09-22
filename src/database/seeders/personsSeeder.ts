import bcrypt from 'bcrypt';
import { person } from "../../entities/person/person";
import { AppDataSource } from "../db";

export const personsSeeder = async () => {
    try {
        await AppDataSource.initialize();

        const user1 = new person();
        user1.name = "Emma";
        user1.surnames = "Garcia";
        user1.email = "emma@emma.com";
        user1.password = bcrypt.hashSync("123456789", 10);
        user1.startup = "TechInnovate";
        user1.dni = "12345678A";
        user1.phone = "611222333";
        user1.role = "user";
        await user1.save();

        const user2 = new person();
        user2.name = "Alejandro";
        user2.surnames = "uiz";
        user2.email = "alejandro@alejandro.com";
        user2.password = bcrypt.hashSync("123456789", 10);
        user2.startup = "DataDrive";
        user2.dni = "23456789B";
        user2.phone = "622333444";
        user2.role = "user";
        await user2.save();

        const user3 = new person();
        user3.name = "Sofía";
        user3.surnames = "Lopez";
        user3.email = "sofia@sofia.com";
        user3.password = bcrypt.hashSync("123456789", 10);
        user3.startup = "EcoSolutions";
        user3.dni = "34567890C";
        user3.phone = "633444555";
        user3.role = "user";
        await user3.save();

        const user4 = new person();
        user4.name = "Pablo";
        user4.surnames = "Torres";
        user4.email = "pablo@pablo.com";
        user4.password = bcrypt.hashSync("123456789", 10);
        user4.startup = "HealthTech";
        user4.dni = "45678901D";
        user4.phone = "644555666";
        user4.role = "user";
        await user4.save();

        const user5 = new person();
        user5.name = "Lucía";
        user5.surnames = "Moreno";
        user5.email = "lucia@lucia.com";
        user5.password = bcrypt.hashSync("123456789", 10);
        user5.startup = "AICorp";
        user5.dni = "56789012E";
        user5.phone = "655666777";
        user5.role = "user";
        await user5.save();

        const user6 = new person();
        user6.name = "Daniel";
        user6.surnames = "Perez";
        user6.email = "daniel@daniel.com";
        user6.password = bcrypt.hashSync("123456789", 10);
        user6.startup = "CloudSystems";
        user6.dni = "67890123F";
        user6.phone = "666777888";
        user6.role = "user";
        await user6.save();

        const user7 = new person();
        user7.name = "Marina";
        user7.surnames = "Sanz";
        user7.email = "marina@marina.com";
        user7.password = bcrypt.hashSync("123456789", 10);
        user7.startup = "GreenEnergy";
        user7.dni = "78901234G";
        user7.phone = "677888999";
        user7.role = "user";
        await user7.save();

        const user8 = new person();
        user8.name = "Javier";
        user8.surnames = "Gomez";
        user8.email = "javier@javier.com";
        user8.password = bcrypt.hashSync("123456789", 10);
        user8.startup = "FinTechSolutions";
        user8.dni = "89012345H";
        user8.phone = "688999000";
        user8.role = "user";
        await user8.save();

        const user9 = new person();
        user9.name = "Carmen";
        user9.surnames = "Navarro";
        user9.email = "carmen@carmen.com";
        user9.password = bcrypt.hashSync("123456789", 10);
        user9.startup = "EdTechInnovators";
        user9.dni = "90123456I";
        user9.phone = "699000111";
        user9.role = "user";
        await user9.save();

        const user10 = new person();
        user10.name = "Miguel";
        user10.surnames = "Vega";
        user10.email = "miguel@miguel.com";
        user10.password = bcrypt.hashSync("123456789", 10);
        user10.startup = "RoboticsFuture";
        user10.dni = "01234567J";
        user10.phone = "600111222";
        user10.role = "user";
        await user10.save();

        const adminUser = new person();
        adminUser.name = "David";
        adminUser.surnames = "Fernandez";
        adminUser.email = "david@david.com";
        adminUser.password = bcrypt.hashSync("123456789", 10);
        adminUser.startup = "AdminCorp";
        adminUser.dni = "58472847D";
        adminUser.phone = "987654321";
        adminUser.role = "admin";
        await adminUser.save();

        console.log("==========================");
        console.log("Persons seeder completed successfully");
        console.log("==========================");

    } catch (error: any) {
        console.error("==========================");
        console.error('ERROR PERSON SEEDER', error.message);
        console.error("==========================");

    } finally {
        await AppDataSource.destroy();
    }
}