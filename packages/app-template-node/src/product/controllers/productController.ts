import { Request, Response } from "express";
const insertFiveProductsService = require("../services/insertFiveProductsService");

class ProductController {
  async store(req: Request, res: Response) {
    const { statusCode, data } = await insertFiveProductsService.store();

    return res.status(statusCode).json(data);
  }
}
export default new ProductController();
