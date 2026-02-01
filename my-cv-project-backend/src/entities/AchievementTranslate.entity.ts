import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { AchievementsEntity } from "./Achievements.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("achievement_translate")
export class AchievementTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "achievement_id", type: 'integer', nullable: false })
    achievementId?: number;

    @Column({ name: "language_code", type: 'varchar', nullable: false })
    languageCode?: string;

    @Column({ name: "achievement_name", type: 'varchar', nullable: false })
    achievementName?: string;

    @Column({ name: "description", type: 'text', nullable: true })
    description?: string;

    @Column({ name: "link", type: 'varchar', nullable: true })
    link?: string;

    @ManyToOne(() => AchievementsEntity)
    @JoinColumn({ name: "achievement_id", referencedColumnName: "id" })
    achievement?: AchievementsEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "language_code", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}