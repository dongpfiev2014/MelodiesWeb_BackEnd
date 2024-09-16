import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  Matches,
  IsStrongPassword,
  IsOptional,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  @Matches(/^\S*$/, { message: "Username should not contain spaces" })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(1, 50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  full_name: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 32)
  @IsStrongPassword()
  password: string;

  @IsString()
  @Length(1, 20)
  @IsOptional()
  role?: string;
}
