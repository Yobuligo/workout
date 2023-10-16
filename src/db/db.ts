import { Sequelize } from "sequelize";
import { AppConfig } from "../AppConfig";

export const db = new Sequelize({
    dialect: "sqlite",
    database: AppConfig.DB_NAME

});
