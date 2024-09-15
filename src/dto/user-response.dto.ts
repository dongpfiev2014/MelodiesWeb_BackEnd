import { Exclude, Expose } from "class-transformer";

@Exclude()
export class UserResponseDto {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  full_name: string;

  @Expose()
  role: string;

  @Expose()
  created_at: Date;

  @Expose()
  updated_at: Date;
}
