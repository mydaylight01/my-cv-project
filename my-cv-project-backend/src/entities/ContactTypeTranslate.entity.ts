import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";
import { ContactTypeEntity } from "./ContactType.entity";
import { LanguageEntity } from "./Language.entity";

@Entity("contact_type_translate")
export class ContactTypeTranslateEntity extends AuditEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", type: "bigint", comment: "Primary Key" })
    id?: number;

    @Column({ name: "contact_type_id", type: 'integer', nullable: false })
    contactTypeId?: number;

    @Column({ name: "language_code", type: 'varchar', nullable: false })
    languageCode?: string;

    @Column({ name: "contact_type_name", type: 'varchar', nullable: true })
    contactTypeName?: string;

    @ManyToOne(() => ContactTypeEntity)
    @JoinColumn({ name: "contact_type_id", referencedColumnName: "id" })
    contactType?: ContactTypeEntity;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: "language_code", referencedColumnName: "languageCode" })
    language?: LanguageEntity;
}