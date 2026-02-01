import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { PersonalCvEntity } from "./PersonalCv.entity";

@Entity("paragraph_bg_img")
export class ParagraphBgImgEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "personal_cv_id", type: 'integer', nullable: false })
    personalCvId?: number;

    @Column({ name: "paragraph_name", type: 'varchar', nullable: true })
    paragraphName?: string;

    @Column({ name: "image_url", type: 'varchar', nullable: true })
    imageUrl?: string;

    @Column({ name: "bg_color", type: 'varchar', nullable: true })
    bgColor?: string;

    @Column({ name: "blur_level", type: 'varchar', nullable: false, default: 'null', comment: 'null, xs, sm, md, lg, xl' })
    blurLevel?: string;

    @ManyToOne(() => PersonalCvEntity)
    @JoinColumn({ name: "personal_cv_id", referencedColumnName: "id" })
    personalCv?: PersonalCvEntity;
}