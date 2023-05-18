import { Router } from "express";
import AuthenticationController from "./authentication/controllers/authenticationController";

const routes = Router();
routes.get("/auth", AuthenticationController.find);

export default routes;
