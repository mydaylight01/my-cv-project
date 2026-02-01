import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { WorkExperiencesEntity } from "./WorkExperiences.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("projects")
export class ProjectsEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "work_experience_id", type: 'integer', nullable: false })
    workExperienceId?: number;

    @Column({ name: "sequence", type: 'integer', nullable: false })
    sequence?: number;

    @Column({ name: "project_start_date", type: 'date', nullable: true })
    projectStartDate?: Date;

    @Column({ name: "project_end_date", type: 'date', nullable: true })
    projectEndDate?: Date;

    @Column({ name: "copy_language", type: 'varchar', nullable: true, default: null })
    copyLanguage?: string;

    @Column({ name: "remark", type: 'text', nullable: true, comment: 'Description about this project' })
    remark?: string;

    @ManyToOne(() => WorkExperiencesEntity)
    @JoinColumn({ name: "work_experience_id", referencedColumnName: "id" })
    workExperience?: WorkExperiencesEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "copy_language", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}