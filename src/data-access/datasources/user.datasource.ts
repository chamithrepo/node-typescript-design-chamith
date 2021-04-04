import { User } from "../entities/user.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(User)
export class UserDatasource extends Repository<User> {}
