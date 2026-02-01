import { AppDataSource } from "../data-source";
import { ProjectsEntity } from "src/entities/Projects.entity";

export const ProjectsRepository = AppDataSource.getRepository(ProjectsEntity).extend({

});