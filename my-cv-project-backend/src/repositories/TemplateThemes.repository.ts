import { AppDataSource } from "../data-source";
import { TemplateThemesEntity } from "src/entities/TemplateThemes.entity";

export const TemplateThemesRepository = AppDataSource.getRepository(TemplateThemesEntity).extend({

});