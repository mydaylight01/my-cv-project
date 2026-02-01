import { AppDataSource } from "../data-source";
import { CvTemplateEntity } from "src/entities/CvTemplate.entity";

export const CvTemplateRepository = AppDataSource.getRepository(CvTemplateEntity).extend({

});