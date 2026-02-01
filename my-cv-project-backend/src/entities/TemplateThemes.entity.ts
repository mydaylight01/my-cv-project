import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";

@Entity("template_themes")
export class TemplateThemesEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "theme_code", type: 'varchar', nullable: false, unique: true })
    themeCode?: string;

    @Column({ name: "theme_name", type: 'varchar', nullable: false })
    themeName?: string;
}