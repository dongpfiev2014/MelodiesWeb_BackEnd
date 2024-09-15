import { IsString, IsNotEmpty, IsEmail, Length } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  full_name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @Length(1, 20)
  role?: string;
}
