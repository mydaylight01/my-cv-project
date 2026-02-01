import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { ProjectDescriptionEntity } from "./ProjectDescription.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("project_description_translate")
export class ProjectDescriptionTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "project_description_id", type: 'integer', nullable: false })
    projectDescriptionId?: number;

    @Column({ name: "language_code", type: 'varchar', nullable: false })
    languageCode?: string;

    @Column({ name: "description", type: 'text', nullable: true })
    description?: string;

    @ManyToOne(() => ProjectDescriptionEntity)
    @JoinColumn({ name: "project_description_id", referencedColumnName: "id" })
    projectDescription?: ProjectDescriptionEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "language_code", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}