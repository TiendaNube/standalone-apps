import { Request, Response } from "express";
const authenticationService = require("../services/authenticationService");

class AuthenticationController {
  async find(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await authenticationService.find(req.query.code);
    return res.status(statusCode).json(data)
  }
}

module.exports = new AuthenticationController();
