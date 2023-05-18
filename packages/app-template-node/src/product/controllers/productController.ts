import { Request, Response } from "express";
import InsertFiveProductsService from "../services/insertFiveProductsService";

class ProductController {
  async store(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await InsertFiveProductsService.store();

    return res.status(statusCode).json(data);
  }
}
export default new ProductController();
