import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";

@Entity("language_skill_translate")
export class LanguageSkillTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "language_skill_id", type: 'integer', nullable: false })
    languageSkillId?: number;

    @Column({ name: "language_name", type: 'varchar', nullable: true })
    languageName?: string;

    @Column({ name: "language_code", type: 'varchar', nullable: true })
    languageCode?: string;
}