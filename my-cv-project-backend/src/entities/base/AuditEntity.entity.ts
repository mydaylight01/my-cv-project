import CONSTANTS from "../../constants/entities/common.constants";
import {
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
    BaseEntity,
} from "typeorm";

export abstract class AuditEntity extends BaseEntity {

    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "uuid", type: "uuid", default: () => "uuid_generate_v4()", unique: true, comment: "UUID Key" })
    uuid?: string;

    @Column({ name: "status", type: "varchar", default: CONSTANTS.STATUS.ACTIVE, nullable: true, comment: "Status [Y: Active, N: Inactive, D: Deleted]" })
    status?: string;

    @CreateDateColumn({ name: "created_date", type: "timestamptz", default: () => "CURRENT_TIMESTAMP", comment: "Create Date" })
    createdDate?: Date;

    @Column({ name: "created_by", type: "varchar", length: 255, nullable: true, comment: "Create By" })
    createdBy?: string;

    @UpdateDateColumn({ name: "updated_date", type: "timestamptz", default: () => "CURRENT_TIMESTAMP", comment: "Update Date" })
    updatedDate?: Date;

    @Column({ name: "updated_by", type: "varchar", length: 255, nullable: true, comment: "Update By" })
    updatedBy?: string;

    @Column({ name: "created_program", type: "varchar", length: 255, nullable: true, comment: "Create Program" })
    createdProgram?: string;

    @Column({ name: "updated_program", type: "varchar", length: 255, nullable: true, comment: "Update Program" })
    updatedProgram?: string;

    @VersionColumn({ name: "version", type: "integer", default: 1, comment: "Version Number" })
    version?: number;
}
