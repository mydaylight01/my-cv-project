import { AppDataSource } from "../data-source";
import { SkillsEntity } from "src/entities/Skills.entity";

export const SkillsRepository = AppDataSource.getRepository(SkillsEntity).extend({

});