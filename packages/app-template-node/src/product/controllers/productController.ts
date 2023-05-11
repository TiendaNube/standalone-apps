const productService = require("../services/productService");

class ProductController {
  async store(req: any, res: any) {
    await productService.insertFiveProducts(req, res);
  }
}
module.exports = new ProductController();
