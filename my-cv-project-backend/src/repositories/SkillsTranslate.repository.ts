import { AppDataSource } from "../data-source";
import { SkillsTranslateEntity } from "src/entities/SkillsTranslate.entity";

export const SkillsTranslateRepository = AppDataSource.getRepository(SkillsTranslateEntity).extend({

});