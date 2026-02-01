import { AppDataSource } from "../data-source";
import { SummaryEntity } from "src/entities/Summary.entity";

export const SummaryRepository = AppDataSource.getRepository(SummaryEntity).extend({

});