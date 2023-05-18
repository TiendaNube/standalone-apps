import { Request, Response, NextFunction } from "express";
import { StatusCode } from "./statusCode.enum";

export default function envCheck(req: Request, res: Response, next: NextFunction) {
  if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.AUTHENTICATION_API) {
    return res.status(StatusCode.BAD_REQUEST).json("It is necessary to set request variables at .env-example file and rename it to .env",
    );
  }

  next();
}

