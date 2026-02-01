import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { ProjectsEntity } from "./Projects.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("project_translate")
export class ProjectTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "project_id", type: 'integer', nullable: false })
    projectId?: number;

    @Column({ name: "language_code", type: 'varchar', nullable: false })
    languageCode?: string;

    @Column({ name: "project_name", type: 'varchar', nullable: false })
    projectName?: string;

    @ManyToOne(() => ProjectsEntity)
    @JoinColumn({ name: "project_id", referencedColumnName: "id" })
    project?: ProjectsEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "language_code", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}