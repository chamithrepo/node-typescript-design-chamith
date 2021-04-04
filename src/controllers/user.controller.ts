import { inject, injectable } from "inversify";
import { UserService } from "../services/user.service";
import { IOCTYPES } from "../ioc";

@injectable()
export class UserController {
  @inject(IOCTYPES.USER_SERVICE) private userService: UserService;

  test(req, res, next) {
    res.send("Yeiiiiii..Working");
    this.userService.createUser();
  }
}
