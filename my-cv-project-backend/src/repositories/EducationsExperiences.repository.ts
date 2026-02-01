import { AppDataSource } from "../data-source";
import { EducationsExperiencesEntity } from "src/entities/EducationsExperiences.entity";

export const EducationsExperiencesRepository = AppDataSource.getRepository(EducationsExperiencesEntity).extend({

});
