import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { TemplateThemesEntity } from "./TemplateThemes.entity";

@Entity("cv_template")
export class CvTemplateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "cv_template_code", type: 'varchar', nullable: false })
    cvTemplateCode?: string;

    @Column({ name: "cv_template_name", type: 'varchar', nullable: false })
    cvTemplateName?: string;

    @Column({ name: "path", type: 'varchar', nullable: true })
    path?: string;

    @Column({ name: "description", type: 'varchar', nullable: true })
    description?: string;

    @Column({ name: "active_template", type: 'boolean', nullable: false, default: true, comment: 'Set to "false" to disable visible and downloadable this template' })
    activeTemplate?: boolean;

    @Column({ name: "theme_id", type: 'integer', nullable: true })
    themeId?: number;

    @ManyToOne(() => TemplateThemesEntity)
    @JoinColumn({ name: "theme_id", referencedColumnName: "id" })
    theme?: TemplateThemesEntity;
}