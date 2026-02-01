import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { LanguageEntity } from "./Language.entity";
import { SkillSetEntity } from "./SkillSet.entity";

@Entity("skill_set_translate")
export class SkillSetTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "language_code", type: 'varchar', nullable: false })
    languageCode?: string;

    @Column({ name: "skill_set_name", type: 'varchar', nullable: true })
    skillSetName?: string;

    @ManyToOne(() => SkillSetEntity)
    @JoinColumn({ name: "skill_set_id", referencedColumnName: "id" })
    skillSet?: SkillSetEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "language_code", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}