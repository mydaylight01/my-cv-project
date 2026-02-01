import { AppDataSource } from "../data-source";
import { ProjectDescriptionTranslateEntity } from "src/entities/ProjectDescriptionTranslate.entity";

export const ProjectDescriptionTranslateRepository = AppDataSource.getRepository(ProjectDescriptionTranslateEntity).extend({

});