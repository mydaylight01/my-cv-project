import { AppDataSource } from "../data-source";
import { PersonalCvTranslateEntity } from "src/entities/PersonalCvTranslate.entity";

export const PersonalCvTranslateRepository = AppDataSource.getRepository(PersonalCvTranslateEntity).extend({

});
