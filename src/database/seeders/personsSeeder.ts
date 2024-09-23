import bcrypt from 'bcrypt';
import { person } from "../../entities/person/person";
import { AppDataSource } from "../db";

export const personsSeeder = async () => {
    try {
        await AppDataSource.initialize();

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

        const user11 = new person();
        user11.name = "Laura";
        user11.surnames = "Fernandez";
        user11.email = "laura@laura.com";
        user11.password = bcrypt.hashSync("123456789", 10);
        user11.startup = "BioTechLab";
        user11.dni = "11223344K";
        user11.phone = "611223344";
        user11.role = "user";
        await user11.save();

        const user12 = new person();
        user12.name = "Carlos";
        user12.surnames = "Martinez";
        user12.email = "carlos@carlos.com";
        user12.password = bcrypt.hashSync("123456789", 10);
        user12.startup = "CyberSecurity";
        user12.dni = "22334455L";
        user12.phone = "622334455";
        user12.role = "user";
        await user12.save();

        const user13 = new person();
        user13.name = "Ana";
        user13.surnames = "Rodriguez";
        user13.email = "ana@ana.com";
        user13.password = bcrypt.hashSync("123456789", 10);
        user13.startup = "VRInnovations";
        user13.dni = "33445566M";
        user13.phone = "633445566";
        user13.role = "user";
        await user13.save();

        const user14 = new person();
        user14.name = "Jorge";
        user14.surnames = "Sanchez";
        user14.email = "jorge@jorge.com";
        user14.password = bcrypt.hashSync("123456789", 10);
        user14.startup = "SmartCities";
        user14.dni = "44556677N";
        user14.phone = "644556677";
        user14.role = "user";
        await user14.save();

        const user15 = new person();
        user15.name = "Isabel";
        user15.surnames = "Lopez";
        user15.email = "isabel@isabel.com";
        user15.password = bcrypt.hashSync("123456789", 10);
        user15.startup = "EcoEnergy";
        user15.dni = "55667788O";
        user15.phone = "655667788";
        user15.role = "user";
        await user15.save();

        const user16 = new person();
        user16.name = "Alberto";
        user16.surnames = "Diaz";
        user16.email = "alberto@alberto.com";
        user16.password = bcrypt.hashSync("123456789", 10);
        user16.startup = "NanoTech";
        user16.dni = "66778899P";
        user16.phone = "666778899";
        user16.role = "user";
        await user16.save();

        const user17 = new person();
        user17.name = "Elena";
        user17.surnames = "Ruiz";
        user17.email = "elena@elena.com";
        user17.password = bcrypt.hashSync("123456789", 10);
        user17.startup = "AILearning";
        user17.dni = "77889900Q";
        user17.phone = "677889900";
        user17.role = "user";
        await user17.save();

        const user18 = new person();
        user18.name = "Raul";
        user18.surnames = "Hernandez";
        user18.email = "raul@raul.com";
        user18.password = bcrypt.hashSync("123456789", 10);
        user18.startup = "BlockchainSolutions";
        user18.dni = "88990011R";
        user18.phone = "688990011";
        user18.role = "user";
        await user18.save();

        const user19 = new person();
        user19.name = "Cristina";
        user19.surnames = "Alvarez";
        user19.email = "cristina@cristina.com";
        user19.password = bcrypt.hashSync("123456789", 10);
        user19.startup = "QuantumComputing";
        user19.dni = "99001122S";
        user19.phone = "699001122";
        user19.role = "user";
        await user19.save();

        const user20 = new person();
        user20.name = "Fernando";
        user20.surnames = "Jimenez";
        user20.email = "fernando@fernando.com";
        user20.password = bcrypt.hashSync("123456789", 10);
        user20.startup = "SpaceTech";
        user20.dni = "00112233T";
        user20.phone = "600112233";
        user20.role = "user";
        await user20.save();

        const user21 = new person();
        user21.name = "Marta";
        user21.surnames = "Romero";
        user21.email = "marta@marta.com";
        user21.password = bcrypt.hashSync("123456789", 10);
        user21.startup = "BionicTech";
        user21.dni = "11223344U";
        user21.phone = "611223355";
        user21.role = "user";
        await user21.save();

        const user22 = new person();
        user22.name = "Hugo";
        user22.surnames = "Torres";
        user22.email = "hugo@hugo.com";
        user22.password = bcrypt.hashSync("123456789", 10);
        user22.startup = "DroneInnovations";
        user22.dni = "22334455V";
        user22.phone = "622334466";
        user22.role = "user";
        await user22.save();

        const user23 = new person();
        user23.name = "Nuria";
        user23.surnames = "Castillo";
        user23.email = "nuria@nuria.com";
        user23.password = bcrypt.hashSync("123456789", 10);
        user23.startup = "MedTechSolutions";
        user23.dni = "33445566W";
        user23.phone = "633445577";
        user23.role = "user";
        await user23.save();

        const user24 = new person();
        user24.name = "Oscar";
        user24.surnames = "Vargas";
        user24.email = "oscar@oscar.com";
        user24.password = bcrypt.hashSync("123456789", 10);
        user24.startup = "CleanEnergyTech";
        user24.dni = "44556677X";
        user24.phone = "644556688";
        user24.role = "user";
        await user24.save();

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