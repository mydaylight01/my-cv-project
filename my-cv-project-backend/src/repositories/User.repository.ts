import { AppDataSource } from "../data-source";
import { UserEntity } from "src/entities/User.entity";

export const UserRepository = AppDataSource.getRepository(UserEntity).extend({

});