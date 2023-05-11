const jsonServer = require("json-server");
const axios = require("axios");
const database = jsonServer.router("db.json");
import sendApiResponse from "../../utils/sendApiResponse.function";
import { StatusCode } from "./../../utils/statusCode.enum";

class AuthenticationService {
  public async find(request: any, response: any) {
    try {
      if(!request.query.code) {
        return sendApiResponse(response, StatusCode.BAD_REQUEST, { message: "The authorization code not found" });
      }

      const body = this.getBody(request.query.code);

      const authenticateResponse = await this.authenticateApp(body);

      database.db.set("credentials", authenticateResponse).write();

      return sendApiResponse(response, authenticateResponse.statusCode , authenticateResponse.data);
    }
    catch(error: any) {
      return sendApiResponse(response, StatusCode.INTERNAL_SERVER_ERROR, { message: error.message });
    }
  }


  private getBody(code: string) {
    return {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "authorization_code",
      code: code,
    }
  }

  private async authenticateApp(body: any) {
    try {
      const response = await axios.post(process.env.AUTHENTICATION_API, body, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", 
        },
      });

      return {
        statusCode: response.status,
        data: response.data,
      };
    }
    catch(error: any) {
      throw new Error(error);
    }
  }
}

module.exports = new AuthenticationService();
