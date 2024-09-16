import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User.entity";

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.session);
  if (!req.session || !req.session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export const authorization = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({
      where: { id: req.session.user?.id },
    });

    console.log(user);
    if (user && !roles.includes(user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};
