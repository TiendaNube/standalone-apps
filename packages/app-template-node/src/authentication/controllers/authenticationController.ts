import { Request, Response } from "express";
import AuthenticationService from "../services/authenticationService";

class AuthenticationController {
  async find(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await AuthenticationService.find(req.query.code as string);
    return res.status(statusCode).json(data)
  }
}

export default new AuthenticationController();
