import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { person } from "../person/person"
import { room } from "../room/room"

@Entity()
export class accessHistory {
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

    @Column({
        type: "enum",
        enum: ["approved", "denied", "pending"],
        default: "pending",
        name: 'state'
    })
    state!: 'approved' | 'denied' | 'pending';

    @ManyToOne(() => person, person => person.record)
    @JoinColumn({ name: 'person_id' })
    person!: person;

    @ManyToOne(() => room, room => room.record)
    @JoinColumn({ name: 'room_id' })
    room!: room;
}
