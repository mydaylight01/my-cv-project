import { AppDataSource } from "../data-source";
import { ContactEntity } from "src/entities/Contact.entity";

export const ContactRepository = AppDataSource.getRepository(ContactEntity).extend({

});
