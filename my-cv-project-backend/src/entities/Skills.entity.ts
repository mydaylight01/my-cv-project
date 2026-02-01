import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { SkillSetEntity } from "./SkillSet.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("skills")
export class SkillsEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "skill_set_id", type: 'integer', nullable: false })
    skillSetId?: number;

    @Column({ name: "description", type: 'varchar', nullable: true })
    description?: string;

    @Column({ name: "skill_level", type: 'integer', nullable: false })
    skillLevel?: number;

    @Column({ name: "skill_icon", type: 'varchar', nullable: true })
    skillIcon?: string;

    @Column({ name: "copy_language", type: 'varchar', nullable: true, default: null, comment: 'If "copy_language" is set to some language, Means "skill_set" table will ignore "skill_set_translate" and copy "skill_set_description" of selected language as DEFAULT to all language display' })
    copyLanguage?: string;

    @Column({ name: "sequence", type: 'integer', nullable: false })
    sequence?: number;

    @Column({ name: "is_highlight", type: 'boolean', nullable: false, default: false, comment: 'Set to "true" to highlight this skill set' })
    isHighlight?: boolean;

    @ManyToOne(() => SkillSetEntity)
    @JoinColumn({ name: "skill_set_id", referencedColumnName: "id" })
    skillSet?: SkillSetEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "copy_language", referencedColumnName: "languageCode" })
    copyLanguageRef?: LanguageEntity;
}