import { IsString, IsEmail, Length, IsOptional } from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @Length(1, 50)
  username?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  @Length(1, 50)
  full_name?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  role?: string;
}
