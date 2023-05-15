import { Request, Response } from "express";
const insertFiveProductsService = require("../services/insertFiveProductsService");
const getTotalProductsService = require("../services/getTotalProductsService");
const listAllProductsService = require("../services/listAllProductsService");
class ProductController {
  // Insert 5 new products at store
  async store(req: Request, res: Response) {
    const { statusCode, data } = await insertFiveProductsService.store();

    return res.status(statusCode).json(data);
  }

  // Get total products at store
  async getTotal(req: Request, res: Response) {
    const { statusCode, data } = await getTotalProductsService.findAll();
    return res.status(statusCode).json(data);
  }

  async getAll(req: Request, res: Response) {
    const { statusCode, data } = await listAllProductsService.findAll();
    return res.status(statusCode).json(data);
  }
}
module.exports = new ProductController();
