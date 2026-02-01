import { AppDataSource } from "../data-source";
import { ParagraphBgImgEntity } from "src/entities/ParagraphBgImg.entity";

export const ParagraphBgImgRepository = AppDataSource.getRepository(ParagraphBgImgEntity).extend({

});
