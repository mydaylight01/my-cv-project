import { AppDataSource } from "../data-source";
import { WorkExperiencesEntity } from "src/entities/WorkExperiences.entity";

export const WorkExperiencesRepository = AppDataSource.getRepository(WorkExperiencesEntity).extend({

});