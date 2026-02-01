

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { PersonalCvEntity } from "./PersonalCv.entity";
import { ContactTypeEntity } from "./ContactType.entity";

@Entity("contact")
export class ContactEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "personal_cv_id", type: 'integer', nullable: false })
    personalCvId?: number;

    @Column({ name: "contact_type_code", type: 'varchar', nullable: false })
    contactTypeCode?: string;

    @Column({ name: "link", type: 'varchar', nullable: true })
    link?: string;

    @Column({ name: "contact_info", type: 'varchar', nullable: true })
    contactInfo?: string;

    @Column({ name: "side", type: 'varchar', nullable: true, comment: '"L": Left, "R": Right, "F", Full' })
    side?: string;

    @Column({ name: "sequence", type: 'integer', nullable: false })
    sequence?: number;

    @ManyToOne(() => PersonalCvEntity)
    @JoinColumn({ name: "personal_cv_id", referencedColumnName: "id" })
    personalCv?: PersonalCvEntity;

    @ManyToOne(() => ContactTypeEntity)
    @JoinColumn({ name: "contact_type_code", referencedColumnName: "contactTypeCode" })
    contactType?: ContactTypeEntity;
}