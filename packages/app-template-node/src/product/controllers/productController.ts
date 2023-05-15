import { Request, Response } from "express";
const productService = require("../services/productService");

class ProductController {
  async store(req: Request, res: Response) {
    const { statusCode, data } = await productService.insertFiveProducts();

    return res.status(statusCode).json(data);
  }
}
module.exports = new ProductController();
