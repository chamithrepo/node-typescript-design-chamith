import { injectable } from "inversify";

@injectable()
export abstract class UserRepository {
  async saveUser() {}
}
