import { AppDataSource } from "../data-source";
import { LanguageSkillsEntity } from "src/entities/LanguageSkills.entity";

export const LanguageSkillsRepository = AppDataSource.getRepository(LanguageSkillsEntity).extend({

});
