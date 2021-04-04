import { injectable, inject } from "inversify";

import { UserService } from "./user.service";
import { IOCTYPES } from "../ioc";
import { UserRepository } from "../data-access/repositories/user.repository";

@injectable()
export class UserServiceImpl implements UserService {
  @inject(IOCTYPES.USER_REPOSITORY) private userRepository: UserRepository;

  public async createUser(): Promise<void> {
    this.userRepository.saveUser();
  }
}
