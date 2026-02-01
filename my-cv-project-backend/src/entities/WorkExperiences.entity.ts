import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { PersonalCvEntity } from "./PersonalCv.entity";

@Entity("work_experiences")
export class WorkExperiencesEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "personal_cv_id", type: 'integer', nullable: false })
    personalCvId?: number;

    @Column({ name: "job_description", type: 'varchar', nullable: true })
    jobDescription?: string;

    @Column({ name: "sequence", type: 'integer', nullable: false })
    sequence?: number;

    @Column({ name: "work_start_date", type: 'date', nullable: false })
    workStartDate?: Date;

    @Column({ name: "work_end_date", type: 'date', nullable: true })
    workEndDate?: Date;

    @Column({ name: "is_present", type: 'boolean', nullable: false, default: false, comment: 'If true means work end date is present' })
    isPresent?: boolean;

    @ManyToOne(() => PersonalCvEntity)
    @JoinColumn({ name: "personal_cv_id", referencedColumnName: "id" })
    personalCv?: PersonalCvEntity;
}