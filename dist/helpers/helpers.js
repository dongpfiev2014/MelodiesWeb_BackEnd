import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config();
export class encrypt {
    static async encryptPass(password) {
        return bcrypt.hashSync(password, 12);
    }
    static comparePassword(hashPassword, password) {
        return bcrypt.compareSync(password, hashPassword);
    }
}
