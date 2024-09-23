import { accessSeeder } from "./accessSeeder";
import { personsSeeder } from "./personsSeeder";
import { roomsSeeder } from "./roomsSeeder";

(async () => {
    console.log("Starting seeders...");
    await personsSeeder();
    await roomsSeeder();
    await accessSeeder();
})();