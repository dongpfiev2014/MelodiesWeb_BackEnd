import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User.entity";

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.user);
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export const authorization = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;

    if (user && !roles.includes(user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};
