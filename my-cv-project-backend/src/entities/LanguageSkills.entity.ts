

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";

@Entity("language_skills")
export class LanguageSkillsEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "personal_cv_id", type: 'integer', nullable: false })
    personalCvId?: number;

    @Column({ name: "sequence", type: 'integer', nullable: false })
    sequence?: number;

    @Column({ name: "power_icon", type: 'varchar', nullable: true })
    powerIcon?: string;

    @Column({ name: "power_level", type: 'integer', nullable: true })
    powerLevel?: number;
}