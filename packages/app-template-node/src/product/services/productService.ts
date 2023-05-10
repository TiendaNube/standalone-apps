const jsonServer = require("json-server");
const axios = require("axios");
const database = jsonServer.router("db.json");
import getCredentials from "../../utils/getCredentials.function";
import sendApiResponse from "../../utils/sendApiResponse.function";
import { StatusCode } from "./../../utils/statusCode.enum";
class ProductService {
  public async store(request:any, response:any) {
    const credentials = getCredentials();

    if(!credentials) {
      return sendApiResponse(response, StatusCode.BAD_REQUEST, { message: "Authorization code not found" });
    }

  }

  private buildHeaders(accessToken: string, ) {
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
      "User-Agent": `My App (${process.env.USER_EMAIL})`,
    }
  }

}

module.exports = new ProductService();
