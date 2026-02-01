import { AppDataSource } from "../data-source";
import { ProjectTranslateEntity } from "src/entities/ProjectTranslate.entity";

export const ProjectTranslateRepository = AppDataSource.getRepository(ProjectTranslateEntity).extend({

});