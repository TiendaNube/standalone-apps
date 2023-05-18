import { Request, Response } from "express";
import InsertFiveProductsService from "../services/insertFiveProductsService";
import GetTotalProductsService from "../services/getTotalProductsService";
import ListAllProductsService from "../services/listAllProductsService";

class ProductController {
  async store(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await InsertFiveProductsService.store();

    return res.status(statusCode).json(data);
  }

  // Get total products at store
  async getTotal(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await getTotalProductsService.findAll();
    return res.status(statusCode).json(data);
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await listAllProductsService.findAll();
    return res.status(statusCode).json(data);
  }
}
export default new ProductController();
