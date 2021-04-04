// import { install as installSourceMapSupport } from "source-map-support";
// installSourceMapSupport();
import "reflect-metadata";
import * as express from "express";
// import * as compress from "compression";
import app from "./server";
// import * as cors from "cors";
// import routes from "./routes";
// import errorHandler from "./errors/error.handler";
import { IOC } from "./ioc";
import { RouteBinder } from "./routes";
import logger from "./logger";
import database from "./data-access/database";
/**
 * This is a bootstrap function
 */
async function bootstrap() {
  // Attach HTTP request info logger middleware in test mode
  if (process.env.NODE_ENV === "test") {
    app.use((req: express.Request, _res, next) => {
      logger.debug(`[${req.method}] ${req.hostname}${req.url}`);

      next();
    });
  }

  app.disable("x-powered-by"); // Hide information
  //   app.use(compress()); // Compress

  // Enable middleware/whatever only in Production
  if (process.env.NODE_ENV === "production") {
    // For example: Enable sentry in production
    // app.use(Sentry.Handlers.requestHandler());
  }

  /**
   * Configure cors
   */
  //   app.use(cors());

  /**
   * Configure databse connection
   **/
  database.connect();

  /**
   * Configure body parser
   */
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  /**
   * Configure routes
   */

  const container = IOC.configureContainer();
  RouteBinder.configureRoutes(app, container);

  /**
   * Configure error handler
   */
  //   errorHandler(app);
}

// Need for integration testing
export default app;

// Invoking the bootstrap function
bootstrap()
  .then(() => {
    logger.info("Server is up");
  })
  .catch((error) => {
    logger.error("Unknown error. " + error.message);
  });