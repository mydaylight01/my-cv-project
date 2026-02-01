import { AppDataSource } from "../data-source";
import { AchievementTranslateEntity } from "src/entities/AchievementTranslate.entity";

export const AchievementTranslateRepository = AppDataSource.getRepository(AchievementTranslateEntity).extend({

});
