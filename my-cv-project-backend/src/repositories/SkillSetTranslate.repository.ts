import { AppDataSource } from "../data-source";
import { SkillSetTranslateEntity } from "src/entities/SkillSetTranslate.entity";

export const SkillSetTranslateRepository = AppDataSource.getRepository(SkillSetTranslateEntity).extend({

});