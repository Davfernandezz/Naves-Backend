import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class person {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name'})
    first_name!: string

    @Column({ name: 'surnames'})
    last_name!: string

    @Column({ name: 'startup'})
    startup!: string

    @Column({ name: 'email'})
    email!: string

    @Column({ name: 'dni'})
    dni!: string

    @Column({ name: 'phone'})
    phone!: string
}