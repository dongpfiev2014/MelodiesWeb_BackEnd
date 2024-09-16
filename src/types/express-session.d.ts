import "express-session";
import { User } from "../entity/User.entity";

declare module "express-session" {
  interface SessionData {
    passport?: {
      user?: any;
    };
  }
}

// declare global {
//   namespace Express {
//     interface Request {
//       user?: User;
//     }
//   }
// }
