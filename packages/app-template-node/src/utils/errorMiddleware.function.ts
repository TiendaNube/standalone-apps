import { Request, Response, NextFunction } from "express";
import { getCredentials } from "./jsonServerConfig";
import { StatusCode } from "./statusCode.enum";

export default function errorMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.AUTHENTICATION_API) {
    return res.status(StatusCode.BAD_REQUEST).json("It is necessary to set request variables at .env-example file and rename it to .env");
  }
  const credentials = getCredentials();

  if (req.path === "/products" || req.path === "/products/total") {
    
    if (!credentials) {
      return {
        statusCode: StatusCode.NOT_FOUND,
        data: "Not found credentials properties at config.json",
      }
    }
    // Get the value of the "Authentication" header
    const authenticationHeader = req.headers["authentication"] as string;

    //Check if the value of the "Authentication" header starts with "bearer" and return the access_token
    const accessTokenHeader = authenticationHeader?.startsWith("bearer") ? authenticationHeader.slice(7) : undefined;
    
    if(accessTokenHeader !== credentials.access_token) {
      return res.status(StatusCode.UNAUTHORIZED).json("The access_token of the Authentication is invalid");
    }
  }

  next();
}

