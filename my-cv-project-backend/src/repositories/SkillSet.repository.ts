import { AppDataSource } from "../data-source";
import { SkillSetEntity } from "src/entities/SkillSet.entity";

export const SkillSetRepository = AppDataSource.getRepository(SkillSetEntity).extend({

});