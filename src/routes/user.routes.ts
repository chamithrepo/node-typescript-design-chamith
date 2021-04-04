import { UserController } from "./../controllers";
import * as express from "express";
import { Container } from "inversify";

export class UserRoutes {
  public static configureRoutes(
    app: express.Express,
    container: Container
  ): void {
    const userController = container.get(UserController);

    app
      .route("/api/users/test")
      .get((req, res, next) => userController.test(req, res, next));
  }
}
