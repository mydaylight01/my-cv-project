import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { SummaryEntity } from "./Summary.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("summary_translate")
export class SummaryTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "summary_id", type: 'integer', nullable: false })
    summaryId?: number;

    @Column({ name: "language_code", type: 'varchar', nullable: false })
    languageCode?: string;

    @Column({ name: "content", type: 'text', nullable: true })
    content?: string;

    @ManyToOne(() => SummaryEntity)
    @JoinColumn({ name: "summary_id", referencedColumnName: "id" })
    summary?: SummaryEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "language_code", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}