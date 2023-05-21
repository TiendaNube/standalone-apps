import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "../../.env.local",
});
import routes from "./routes";
import cors from "cors";
import errorMiddleware from "./utils/errorMiddleware.function";
const port = process.env.PORT || 7200;
const app = express();

// Disable cors
app.use(cors());

app.use(errorMiddleware);

app.use(routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
