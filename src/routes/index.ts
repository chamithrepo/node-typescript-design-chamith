import { UserRoutes } from "./user.routes";
import * as express from "express";
import { Container } from "inversify";

export class RouteBinder {
  public static configureRoutes(
    app: express.Express,
    container: Container
  ): void {
    UserRoutes.configureRoutes(app, container);
  }
}
