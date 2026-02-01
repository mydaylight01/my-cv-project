import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { PersonalCvEntity } from "./PersonalCv.entity";
import { SkillsEntity } from "./Skills.entity";

@Entity("skill_set")
export class SkillSetEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "personal_cv_id", type: 'integer', nullable: false })
    personalCvId?: number;

    @Column({ name: "paragraph_side", type: 'char', nullable: false, default: 'L', comment: '"L": Left, "M": Middle, "R": Right' })
    paragraphSide?: string;

    @Column({ name: "sequence", type: 'integer', nullable: false })
    sequence?: number;

    @OneToMany(() => SkillsEntity, (skills) => skills.skillSet)
    skills?: SkillsEntity[];

    @ManyToOne(() => PersonalCvEntity)
    @JoinColumn({ name: "personal_cv_id", referencedColumnName: "id" })
    personalCv?: PersonalCvEntity;
}