import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Person1726560167856 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "person",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "surnames",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "startup",
                        type: "varchar",
                        length: "100",
                        isNullable: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "dni",
                        type: "varchar",
                        length: "15",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "15"
                    },
                    {
                        name: "role",
                        type: "enum",
                        enum: ["user", "admin"], 
                        default: "'user'",
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('person')
    }
}