import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";

@Entity("user")
export class UserEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "user_name", type: 'varchar', nullable: false, unique: true })
    userName?: string;

    @Column({ name: "display_name", type: 'varchar', nullable: false })
    displayName?: string;

    @Column({ name: "hashed_password", type: 'text', nullable: false })
    hashedPassword?: string;
}