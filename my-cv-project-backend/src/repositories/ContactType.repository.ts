import { AppDataSource } from "../data-source";
import { ContactTypeEntity } from "src/entities/ContactType.entity";

export const ContactTypeRepository = AppDataSource.getRepository(ContactTypeEntity).extend({

});
