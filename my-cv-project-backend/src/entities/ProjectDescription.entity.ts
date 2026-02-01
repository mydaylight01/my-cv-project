import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { ProjectsEntity } from "./Projects.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("project_description")
export class ProjectDescriptionEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "project_id", type: 'integer', nullable: false })
    projectId?: number;

    @Column({ name: "paragraph_sequence", type: 'integer', nullable: false })
    paragraphSequence?: number;

    @Column({ name: "copy_language", type: 'varchar', nullable: true, default: null })
    copyLanguage?: string;

    @ManyToOne(() => ProjectsEntity)
    @JoinColumn({ name: "project_id", referencedColumnName: "id" })
    project?: ProjectsEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "copy_language", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}