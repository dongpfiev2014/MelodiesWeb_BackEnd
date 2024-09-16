import { Router } from "express";
import authRouter from "./auth.routes";
import { authentication } from "../middlewares/auth.middleware";
// import userRouter from "./user.routes";
const router = Router();
router.use("/api/auth", authRouter);
// router.use("/api/user", userRouter);
router.get("*", authentication, (req, res) => {
    res.status(505).json({ message: "Bad Request" });
});
export default router;
