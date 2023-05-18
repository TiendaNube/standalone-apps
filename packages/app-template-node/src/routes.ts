import { Router } from "express";
import AuthenticationController from "./authentication/controllers/authenticationController";
import ProductController from "./product/controllers/productController";

const routes = Router();
routes.get("/auth", AuthenticationController.find);
routes.post("/products", ProductController.store);
routes.get("/products/total", ProductController.getTotal);
routes.get("/products", ProductController.getAll);
routes.delete("/products/:id", ProductController.delete);

export default routes;
