import { AppDataSource } from "../data-source";
import { EducationsExperiencesTranslateEntity } from "src/entities/EducationsExperiencesTranslate.entity";

export const EducationsExperiencesTranslateRepository = AppDataSource.getRepository(EducationsExperiencesTranslateEntity).extend({

});
