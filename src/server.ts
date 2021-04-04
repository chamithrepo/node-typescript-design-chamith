import * as express from "express";
import * as dotenv from "dotenv";
// import Database from "./data-access/database";
dotenv.config();

import logger from "./logger";

// Database.connect();
const app = express();

app.get("/", (req, res) => {
  logger.info(`Request ${req}`);
  res.send("Productizecrm Backend - REST API");
});

/**
 * Setup listener port
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Running Node.js version ${process.version}`);
  logger.info(`App environment: ${process.env.NODE_ENV}`);
  logger.info(`App is running on port ${PORT}`);
});

export default app;
