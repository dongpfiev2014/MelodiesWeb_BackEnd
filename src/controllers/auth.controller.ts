// import { Request, Response } from "express";

// export class AuthController {
//   static async signUp(req: Request, res: Response) {
//     const { username, full_name, email, password, role } =
//       req.body as CreateUserDto;
//     const encryptedPassword = await encrypt.encryptPass(password);

//     const userRepository = AppDataSource.getRepository(User);
//     await userRepository.save(user);

//     return res.status(200).send({ message: "User created successfully", user });
//   }
// }
