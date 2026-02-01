import { AppDataSource } from "../data-source";
import { WorkExperienceTranslateEntity } from "src/entities/WorkExperienceTranslate.entity";

export const WorkExperienceTranslateRepository = AppDataSource.getRepository(WorkExperienceTranslateEntity).extend({

});