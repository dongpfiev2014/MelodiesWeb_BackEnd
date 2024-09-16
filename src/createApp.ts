import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware";
import routes from "./routes/index";
import "reflect-metadata";
import session from "express-session";
import passport from "passport";
import Redis from "ioredis";
import RedisStore from "connect-redis";
import crypto from "crypto";

export const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT as string, 10),
  db: 0,
});

export function createApp() {
  dotenv.config();

  const app = express();

  // Body parsing middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Cors middleware
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
      credentials: true,
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Authorization",
      ],
    })
  );

  // Applies to using session with redis

  const redisStore = new RedisStore({
    client: redisClient,
    ttl: 24 * 60 * 60, // 1 day
  });

  redisClient.get("test-redis").then((result) => {
    console.log(result); // Prints "value"
  });

  // Session middleware
  app.use(
    session({
      store: redisStore,
      resave: false,
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET as string,
      genid(req) {
        const sessionId = crypto.randomBytes(16).toString("hex");
        console.log("Generated Session ID:", sessionId);
        return sessionId; // Tạo session ID độc nhất
      },

      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: "strict",
      },
    })
  );

  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  // Routes middleware
  app.use(routes);

  // Error handling middleware
  app.use(errorHandler);

  return app;
}
