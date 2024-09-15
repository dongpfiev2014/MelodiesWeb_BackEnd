import { Request, Response, Router } from "express";
// import authRouter from "./auth.routes";
// import userRouter from "./user.routes";

const router = Router();

// router.use("/api/auth", authRouter);
// router.use("/api/user", userRouter);

router.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});

export default router;
