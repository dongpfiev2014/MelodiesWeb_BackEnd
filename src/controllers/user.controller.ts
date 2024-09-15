// import { Request, Response } from "express";
// import * as cache from "memory-cache";
// import { AppDataSource } from "../data-source";
// import { User } from "../entity/User.entity";
// import { encrypt } from "../helpers/helpers";
// import { CreateUserDto } from "../dto/create-user.dto";

// export class UserController {
//   static async getUsers(req: Request, res: Response) {
//     const data = cache.get("data");
//     if (data) {
//       console.log("serving from cache");
//       return res.status(200).json({
//         data,
//       });
//     } else {
//       console.log("serving from db");
//       const userRepository = AppDataSource.getRepository(User);
//       const users = await userRepository.find();

//       cache.put("data", users, 6000);
//       return res.status(200).json({
//         data: users,
//       });
//     }
//   }
//   static async updateUser(req: Request, res: Response) {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     const userRepository = AppDataSource.getRepository(User);
//     const user = await userRepository.findOne({
//       where: { id },
//     });
//     user.name = name;
//     user.email = email;
//     await userRepository.save(user);
//     res.status(200).json({ message: "udpdate", user });
//   }

//   static async deleteUser(req: Request, res: Response) {
//     const { id } = req.params;
//     const userRepository = AppDataSource.getRepository(User);
//     const user = await userRepository.findOne({
//       where: { id },
//     });
//     await userRepository.remove(user);
//     res.status(200).json({ message: "ok" });
//   }
// }
