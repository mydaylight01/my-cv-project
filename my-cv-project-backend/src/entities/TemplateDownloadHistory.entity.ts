import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { UserEntity } from "./User.entity";
import { PersonalCvEntity } from "./PersonalCv.entity";

@Entity("template_download_history")
export class TemplateDownloadHistoryEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "download_by", type: 'varchar', nullable: false })
    downloadBy?: string;

    @Column({ name: "personal_cv_id", type: 'integer', nullable: false })
    personalCvId?: number;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: "download_by", referencedColumnName: "userName" })
    downloader?: UserEntity;

    @ManyToOne(() => PersonalCvEntity)
    @JoinColumn({ name: "personal_cv_id", referencedColumnName: "id" })
    personalCv?: PersonalCvEntity;
}