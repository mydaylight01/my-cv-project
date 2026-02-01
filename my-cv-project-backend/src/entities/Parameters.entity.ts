import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";

@Entity("parameters")
export class ParametersEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "parameter_key", type: 'varchar', nullable: false })
    parameterKey?: string;

    @Column({ name: "parameter_value", type: 'varchar', nullable: true })
    parameterValue?: string;

    @Column({ name: "parameter_type", type: 'varchar', nullable: true })
    parameterType?: string;

    @Column({ name: "parameter_group", type: 'varchar', nullable: true })
    parameterGroup?: string;

    @Column({ name: "parameter_description", type: 'varchar', nullable: true })
    parameterDescription?: string;
}