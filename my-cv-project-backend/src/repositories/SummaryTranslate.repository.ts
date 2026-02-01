import { AppDataSource } from "../data-source";
import { SummaryTranslateEntity } from "src/entities/SummaryTranslate.entity";

export const SummaryTranslateRepository = AppDataSource.getRepository(SummaryTranslateEntity).extend({

});