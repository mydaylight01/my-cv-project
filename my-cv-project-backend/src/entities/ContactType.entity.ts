import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";

@Entity("contact_type")
export class ContactTypeEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "contact_type_code", type: 'varchar', nullable: false, unique: true })
    contactTypeCode?: string;

    @Column({ name: "description", type: 'varchar', nullable: true })
    description?: string;

    @Column({ name: "icon", type: 'varchar', nullable: true })
    icon?: string;
}