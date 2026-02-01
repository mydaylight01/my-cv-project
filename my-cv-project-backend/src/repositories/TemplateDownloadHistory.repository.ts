import { AppDataSource } from "../data-source";
import { TemplateDownloadHistoryEntity } from "src/entities/TemplateDownloadHistory.entity";

export const TemplateDownloadHistoryRepository = AppDataSource.getRepository(TemplateDownloadHistoryEntity).extend({

});