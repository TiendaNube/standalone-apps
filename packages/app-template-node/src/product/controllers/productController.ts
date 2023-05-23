import { Request, Response } from "express";
import InsertFiveProductsService from "../services/insertFiveProductsService";
import GetTotalProductsService from "../services/getTotalProductsService";
import ListAllProductsService from "../services/listAllProductsService";
import DeleteProductsService from "../services/deleteProductsService";

class ProductController {
  async store(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await InsertFiveProductsService.store();

    return res.status(statusCode).json(data);
  }

  // Get total products at store
  async getTotal(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await GetTotalProductsService.findAll();
    return res.status(statusCode).json(data);
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await ListAllProductsService.findAll();
    return res.status(statusCode).json(data);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await DeleteProductsService.deleteById(req.params.id as string);
    return !data ? res.status(statusCode).json(req.params.id) : res.status(statusCode).json(data);
  }
}
export default new ProductController();
