import { AppDataSource } from "../data-source";
import { LanguageEntity } from "src/entities/Language.entity";

export const LanguageRepository = AppDataSource.getRepository(LanguageEntity).extend({

});
