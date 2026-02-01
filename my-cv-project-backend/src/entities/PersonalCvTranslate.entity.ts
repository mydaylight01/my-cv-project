import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { PersonalCvEntity } from "./PersonalCv.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("personal_cv_translate")
export class PersonalCvTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "personal_cv_id", type: 'integer', nullable: false })
    personalCvId?: number;

    @Column({ name: "language_code", type: 'varchar', nullable: false })
    languageCode?: string;

    @Column({ name: "cv_title_name", type: 'varchar', nullable: true })
    cvTitleName?: string;

    @Column({ name: "cv_first_name", type: 'varchar', nullable: true })
    cvFirstName?: string;

    @Column({ name: "cv_last_name", type: 'varchar', nullable: true })
    cvLastName?: string;

    @Column({ name: "job_position", type: 'varchar', nullable: true })
    jobPosition?: string;

    @ManyToOne(() => PersonalCvEntity)
    @JoinColumn({ name: "personal_cv_id", referencedColumnName: "id" })
    personalCv?: PersonalCvEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "language_code", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}