import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../entity/User.entity";
import { AppDataSource } from "../data-source";
import { encrypt } from "../helpers/helpers";
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    try {
        console.log(id);
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({ id });
        done(null, user);
    }
    catch (err) {
        done(err, null);
    }
});
passport.use(new Strategy(async (username, password, done) => {
    try {
        console.log(username, password);
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { username } });
        if (!user)
            return done(null, false, { message: "User not found" });
        if (!encrypt.comparePassword(user.password, password))
            return done(null, false, { message: "Bad Credentials" });
        return done(null, user);
    }
    catch (err) {
        return done(err);
    }
}));
export default passport;
