import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"; 
dotenv.config();
import routes from "./routes";
import cors from "cors";
import envCheck from "./utils/envCheck.function";


const port = process.env.PORT || 7200;
const app = express();

// Disable cors
app.use(cors());

// Check if all variables at .env file were set
app.use(envCheck);

app.use(routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
