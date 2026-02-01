import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";

@Entity("authentication_logs")
export class AuthenticationLogEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "action", type: 'varchar', nullable: false })
    action?: string;

    @Column({ name: "description1", type: 'varchar', length: 1000, nullable: true })
    description1?: string;

    @Column({ name: "description2", type: 'varchar', length: 1000, nullable: true })
    description2?: string;

    @Column({ name: "program_code", type: 'varchar', nullable: true })
    programCode?: string;

    @Column({ name: "username", type: 'varchar', length: 40, nullable: true })
    username?: string;

    @Column({ name: "student_code", type: 'varchar', length: 10, nullable: true })
    studentCode?: string;

    @Column({ name: "user_agent", type: 'varchar', length: 1000, nullable: true })
    userAgent?: string;
}