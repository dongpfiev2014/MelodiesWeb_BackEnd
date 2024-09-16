import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../entity/User.entity";
import { AppDataSource } from "../data-source";
import { encrypt } from "../helpers/helpers";
import { UserResponseDto } from "../dto/user-response.dto";
import { plainToInstance } from "class-transformer";

passport.serializeUser(
  (user: any, done: (err: Error | null, id: string) => void) => {
    done(null, user.id);
  }
);

passport.deserializeUser(
  async (
    id: string,
    done: (err: Error | null, user: UserResponseDto | null) => void
  ) => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOneBy({ id });
      done(null, plainToInstance(UserResponseDto, user));
    } catch (err) {
      done(err as Error, null);
    }
  }
);

passport.use(
  new Strategy(
    async (
      username: string,
      password: string,
      done: (err: any, user?: User | false, info?: any) => void
    ) => {
      try {
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { username } });

        if (!user) return done(null, false, { message: "User not found" });

        if (!encrypt.comparePassword(user.password, password))
          return done(null, false, { message: "Bad Credentials" });

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

export default passport;
