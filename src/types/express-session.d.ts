import "express-session";
import { User } from "../entity/User.entity";

declare module "express-session" {
  interface SessionData {
    user?: User;
  }
}

// declare global {
//   namespace Express {
//     interface Request {
//       currentUser?: any;
//     }
//   }
// }
