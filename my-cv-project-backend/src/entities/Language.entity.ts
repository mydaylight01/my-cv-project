

import { Column, Entity } from "typeorm";
import { AuditEntity } from "./base/AuditEntity.entity";

@Entity("language")
export class LanguageEntity extends AuditEntity {
    @Column({ name: "language_code", type: 'varchar', primary: true, nullable: false })
    languageCode?: string;

    @Column({ name: "description", type: 'varchar', nullable: true })
    description?: string;

    @Column({ name: "description_local", type: 'varchar', nullable: true })
    descriptionLocal?: string;

    @Column({ name: "is_active", type: 'boolean', nullable: true })
    isActive?: boolean;

    @Column({ name: "sequence", type: 'integer', nullable: true })
    sequence?: number;
}