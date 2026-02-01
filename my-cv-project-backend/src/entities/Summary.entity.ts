import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { PersonalCvEntity } from "./PersonalCv.entity";

@Entity("summary")
export class SummaryEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "personal_cv_id", type: 'integer', nullable: false })
    personalCvId?: number;

    @Column({ name: "paragraph", type: 'integer', nullable: false })
    paragraph?: number;

    @Column({ name: "is_blank", type: 'boolean', nullable: false, default: false, comment: 'when "is_blank" is true, this line will be leave as blank space' })
    isBlank?: boolean;

    @ManyToOne(() => PersonalCvEntity)
    @JoinColumn({ name: "personal_cv_id", referencedColumnName: "id" })
    personalCv?: PersonalCvEntity;
}