import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { person } from "./person"
import { room } from "./room"

@Entity()
export class access {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'person_id'})
    person_id!: number

    @Column({ name: 'room_id'})
    room_id!: number

    @Column({ name: 'entry_datetime'})
    entry_datetime!: Date

    @Column({ name: 'exit_datetime'})
    exit_datetime!: Date

    @Column({ name: 'state'})
    state!: string

    @ManyToOne(() => person)
    @JoinColumn({ name: 'person_id' })
    person!: person;

    @ManyToOne(() => room)
    @JoinColumn({ name: 'room_id' })
    room!: room;
}