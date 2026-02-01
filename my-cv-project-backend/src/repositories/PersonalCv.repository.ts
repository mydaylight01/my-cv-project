import { AppDataSource } from "../data-source";
import { PersonalCvEntity } from "src/entities/PersonalCv.entity";

export const PersonalCvRepository = AppDataSource.getRepository(PersonalCvEntity).extend({

});
