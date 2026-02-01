import { AppDataSource } from "../data-source";
import { AchievementsEntity } from "src/entities/Achievements.entity";

export const AchievementsRepository = AppDataSource.getRepository(AchievementsEntity).extend({

});
