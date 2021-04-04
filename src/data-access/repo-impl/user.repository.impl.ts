import { injectable } from "inversify";
import { UserDatasource } from "../datasources/user.datasource";
import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

@injectable()
export class UserRepositoryImpl extends UserRepository {
  constructor(private readonly datasource: UserDatasource) {
    super();
  }

  async saveUser() {
    console.log("save User");
    let user = new User();
    user.id = 1;
    user.name = "chamith";

    await this.datasource.save(user);
  }
}
