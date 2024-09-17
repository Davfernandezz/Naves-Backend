import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class administration {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'report_date' })
    report_date!: Date

    @Column({ name: 'total_accesses' })
    total_accesses!: number

    @Column({ name: 'total_absences' })
    total_absences!: number

    @Column({ name: 'frequent_persons' })
    frequent_users!: string

    @Column({ name: 'infrequent_persons' })
    infrequent_users!: string
}



    