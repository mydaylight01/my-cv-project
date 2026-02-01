import { AppDataSource } from "../data-source";
import { LanguageSkillTranslateEntity } from "src/entities/LanguageSkillTranslate.entity";

export const LanguageSkillTranslateRepository = AppDataSource.getRepository(LanguageSkillTranslateEntity).extend({

});
