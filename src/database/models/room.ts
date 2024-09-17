import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class room {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: 'room_name' })
    room_name!: string;

    @Column({ name: 'capacity' })
    capacity!: number;

    @Column({ name: 'room_type' })
    room_type!: string;
}