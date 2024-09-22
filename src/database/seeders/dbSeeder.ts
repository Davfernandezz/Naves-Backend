import { personsSeeder } from "./personsSeeder";

(async () => {
    console.log("Starting seeders...");
    await personsSeeder();

})();