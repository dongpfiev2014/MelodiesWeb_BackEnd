import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import path from "path";
dotenv.config();
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_HOST_DOCKER, POSTGRES_HOST_LOCAL, POSTGRES_PORT, NODE_ENV, } = process.env;
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.NODE_ENV === "docker"
        ? POSTGRES_HOST_DOCKER
        : POSTGRES_HOST_LOCAL,
    port: parseInt(POSTGRES_PORT || "5432"),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    entities: [path.resolve("src/entity/**/*.ts")],
    synchronize: NODE_ENV === "development" || NODE_ENV === "docker",
    logging: NODE_ENV === "development" || NODE_ENV === "docker",
    migrations: [path.resolve("/migration/*.ts")],
    subscribers: [],
});
