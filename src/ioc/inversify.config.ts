import { Container } from "inversify";
import { IOCTYPES } from "../ioc";

import { UserController } from "./../controllers";
import { UserService, UserServiceImpl } from "./../services";
import {
  UserRepository,
  UserRepositoryImpl,
  UserDatasource,
} from "./../data-access";

export module IOC {
  export const container = new Container();

  export function configureContainer(): Container {
    container.bind<UserController>(UserController).toSelf();
    container.bind<UserService>(IOCTYPES.USER_SERVICE).to(UserServiceImpl);
    container
      .bind<UserRepository>(IOCTYPES.USER_REPOSITORY)
      .to(UserRepositoryImpl);
    container.bind<UserDatasource>(IOCTYPES.USER_DATASOURCE).to(UserDatasource);

    return container;
  }
}
