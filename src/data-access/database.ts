import { createConnection, Connection } from "typeorm";

class Database {
  private connection: Connection = null;

  public async connect(): Promise<void> {
    if (this.connection != null) {
      console.log("Connection already exists");
      return;
    }
    this.connection = await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3308,
      username: "root",
      password: "1234",
      database: "productizecrm",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      logging: false,
    });
  }
}

const db = new Database();

export default db;
