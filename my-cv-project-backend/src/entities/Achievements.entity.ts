import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { PersonalCvEntity } from "./PersonalCv.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("achievements")
export class AchievementsEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "personal_cv_id", type: 'integer', nullable: false })
    personalCvId?: number;

    @Column({ name: "sequence", type: 'integer', nullable: false })
    sequence?: number;

    @Column({ name: "achievement_date", type: 'date', nullable: true })
    achievementDate?: Date;

    @Column({ name: "copy_language", type: 'varchar', nullable: true, default: null })
    copyLanguage?: string;

    @ManyToOne(() => PersonalCvEntity)
    @JoinColumn({ name: "personal_cv_id", referencedColumnName: "id" })
    personalCv?: PersonalCvEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "copy_language", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}