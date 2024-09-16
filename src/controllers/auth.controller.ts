import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User.entity";
import { encrypt } from "../helpers/helpers";
import { CreateUserDto } from "../dto/create-user.dto";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { UserResponseDto } from "../dto/user-response.dto";

export class AuthController {
  static async signUp(req: Request, res: Response) {
    try {
      const createUserDto = plainToInstance(CreateUserDto, req.body);
      const errors = await validate(createUserDto);
      if (errors.length > 0) {
        return res.status(400).send({
          message: "Validation failed",
          errors,
        });
      }

      const userRepository = AppDataSource.getRepository(User);
      const newUser = userRepository.create({
        ...createUserDto,
        password: await encrypt.encryptPass(createUserDto.password),
      });
      await userRepository.save(newUser);

      return res.status(201).send({
        message: "User created successfully",
        data: plainToInstance(UserResponseDto, newUser),
      });
    } catch (error: any) {
      if (error.code === "23505") {
        // Mã lỗi PostgreSQL cho unique violation
        return res.status(400).json({
          message: "User already exists",
          error: error.message,
        });
      }
      return res
        .status(500)
        .send({ message: "Internal server error", error: error.message });
    }
  }

  static async logIn(req: Request, res: Response) {
    return res.status(200).send({
      message: "Logged in successfully",
    });
  }
}
