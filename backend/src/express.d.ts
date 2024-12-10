import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    signedCookies: { [key: string]: string };
    user?: any; // Add the user property
  }
}
