import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { EducationsExperiencesEntity } from "./EducationsExperiences.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("educations_experiences_translate")
export class EducationsExperiencesTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "education_id", type: 'integer', nullable: false })
    educationId?: number;

    @Column({ name: "language_code", type: 'varchar', nullable: false })
    languageCode?: string;

    @Column({ name: "degree", type: 'varchar', nullable: false })
    degree?: string;

    @Column({ name: "detail", type: 'varchar', nullable: true })
    detail?: string;

    @Column({ name: "honor", type: 'varchar', nullable: true })
    honor?: string;

    @ManyToOne(() => EducationsExperiencesEntity)
    @JoinColumn({ name: "education_id", referencedColumnName: "id" })
    education?: EducationsExperiencesEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "language_code", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}