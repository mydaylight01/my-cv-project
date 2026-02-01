import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { SkillsEntity } from "./Skills.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("skills_translate")
export class SkillsTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "skill_id", type: 'integer', nullable: false })
    skillId?: number;

    @Column({ name: "language_code", type: 'varchar', nullable: false })
    languageCode?: string;

    @Column({ name: "skill_content", type: 'varchar', nullable: true })
    skillContent?: string;

    @ManyToOne(() => SkillsEntity)
    @JoinColumn({ name: "skill_id", referencedColumnName: "id" })
    skill?: SkillsEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "language_code", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}