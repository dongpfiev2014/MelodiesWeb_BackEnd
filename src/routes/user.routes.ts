import { Router } from "express";
import { authentication, authorization } from "../middlewares/auth.middleware";
import { UserController } from "../controllers/user.controller";

const userRouter = Router();
userRouter.use(authentication);

userRouter.get("/users", authorization(["admin"]), UserController.getUsers);

// userRouter.get("/profile", authorization(["user", "admin"]), getProfile);

// userRouter.put("/update/:id", authorization(["user", "admin"]), updateUser);

// userRouter.delete("/delete/:id", authorization(["admin"]), deleteUser);

export default userRouter;
