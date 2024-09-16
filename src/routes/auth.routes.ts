import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import passport from "../strategies/local-strategy";

const authRouter = Router();

authRouter.post("/signup", AuthController.signUp);

authRouter.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  AuthController.logIn
);

export default authRouter;
