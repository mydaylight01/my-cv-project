import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { PersonalCvEntity } from "./PersonalCv.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("educations_experiences")
export class EducationsExperiencesEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "personal_cv_id", type: 'integer', nullable: false })
    personalCvId?: number;

    @Column({ name: "sequence", type: 'integer', nullable: false })
    sequence?: number;

    @Column({ name: "start_date", type: 'date', nullable: true })
    startDate?: Date;

    @Column({ name: "end_date", type: 'date', nullable: true })
    endDate?: Date;

    @Column({ name: "date_format", type: 'varchar', nullable: false, default: 'dd/mm/yyyy', comment: 'choose date display format: 1.null (not show) 2.dd/mm/yyyy 3.mm/yyyy 4.yyyy' })
    dateFormat?: string;

    @Column({ name: "gpa", type: 'decimal', nullable: true })
    gpa?: number;

    @Column({ name: "copy_language", type: 'varchar', nullable: true, default: null })
    copyLanguage?: string;

    @ManyToOne(() => PersonalCvEntity)
    @JoinColumn({ name: "personal_cv_id", referencedColumnName: "id" })
    personalCv?: PersonalCvEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "copy_language", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}