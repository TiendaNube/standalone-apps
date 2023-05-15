import { Request, Response } from "express";
const insertFiveProductsService = require("../services/insertFiveProductsService");
const getTotalProductsService = require("../services/getTotalProductsService");
const listAllProductsService = require("../services/listAllProductsService");
const deleteProductsService = require("../services/deleteProductsService");
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

  async delete(req: Request, res: Response) {
    const { statusCode, data } = await deleteProductsService.deleteById(req.params.id);
    return !data ? res.status(statusCode).json(req.params.id) : res.status(statusCode).json(data);
  }
}
module.exports = new ProductController();
