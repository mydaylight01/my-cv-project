

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { UserEntity } from "./User.entity";
import { CvTemplateEntity } from "./CvTemplate.entity";

@Entity("personal_cv")
export class PersonalCvEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "cv_name", type: 'varchar', nullable: false })
    cvName?: string;

    @Column({ name: "cv_owner", type: 'varchar', nullable: false })
    cvOwner?: string;

    @Column({ name: "cv_template_id", type: 'integer', nullable: true })
    cvTemplateId?: number;

    @Column({ name: "publish_status", type: 'boolean', nullable: false, default: false, comment: 'If "publish_status" is true that mean everyone can view and download your cv' })
    publishStatus?: boolean;

    @Column({ name: "image_url", type: 'varchar', nullable: true, comment: 'if no image url, personal image will disappear' })
    imageUrl?: string;

    @Column({ name: "image_url_flip", type: 'varchar', nullable: true })
    imageUrlFlip?: string;

    @Column({ name: "share_url", type: 'varchar', nullable: true })
    shareUrl?: string;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: "cv_owner", referencedColumnName: "userName" })
    owner?: UserEntity;

    @ManyToOne(() => CvTemplateEntity)
    @JoinColumn({ name: "cv_template_id", referencedColumnName: "id" })
    cvTemplate?: CvTemplateEntity;
}