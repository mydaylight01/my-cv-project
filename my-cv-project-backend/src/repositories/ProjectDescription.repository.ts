import { AppDataSource } from "../data-source";
import { ProjectDescriptionEntity } from "src/entities/ProjectDescription.entity";

export const ProjectDescriptionRepository = AppDataSource.getRepository(ProjectDescriptionEntity).extend({

});