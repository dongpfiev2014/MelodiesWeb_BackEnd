import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";

dotenv.config();

export class encrypt {
  static async encryptPass(password: string) {
    return bcrypt.hashSync(password, 12);
  }
  static comparePassword(hashPassword: string, password: string) {
    return bcrypt.compareSync(password, hashPassword);
  }
}
