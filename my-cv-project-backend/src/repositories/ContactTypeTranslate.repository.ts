import { AppDataSource } from "../data-source";
import { ContactTypeTranslateEntity } from "src/entities/ContactTypeTranslate.entity";

export const ContactTypeTranslateRepository = AppDataSource.getRepository(ContactTypeTranslateEntity).extend({

});
