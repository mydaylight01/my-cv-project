import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { WorkExperiencesEntity } from "./WorkExperiences.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("work_experience_translate")
export class WorkExperienceTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "work_experience_id", type: 'integer', nullable: false })
    workExperienceId?: number;

    @Column({ name: "language_code", type: 'varchar', nullable: false })
    languageCode?: string;

    @Column({ name: "workplace_name", type: 'varchar', nullable: true })
    workplaceName?: string;

    @Column({ name: "job_position_name", type: 'varchar', nullable: true })
    jobPositionName?: string;

    @ManyToOne(() => WorkExperiencesEntity)
    @JoinColumn({ name: "work_experience_id", referencedColumnName: "id" })
    workExperience?: WorkExperiencesEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "language_code", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}