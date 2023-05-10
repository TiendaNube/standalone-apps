const jsonServer = require("json-server");
const axios = require("axios");
const database = jsonServer.router("db.json");
import getCredentials from "../../utils/getCredentials.function";
import sendApiResponse from "../../utils/sendApiResponse.function";
import { StatusCode } from "./../../utils/statusCode.enum";

class AuthenticationService {
  public async find(request: any, response: any) {
    try {
      if(request.query.code) {
        const body = this.getBody(request.query.code);
        const accessTokenResponse = await this.authenticateApp(body);

        if(!accessTokenResponse.error){
          database.db.set("credentials", accessTokenResponse).write();
          return sendApiResponse(response, StatusCode.OK, accessTokenResponse);
        }

        return sendApiResponse(response, StatusCode.BAD_REQUEST, { message: accessTokenResponse.error_description });
      }
      const credentials = getCredentials();

      if(!credentials) {
        return sendApiResponse(response, StatusCode.BAD_REQUEST, { message: "Authorization code not found" });
      }

      return sendApiResponse(response, StatusCode.OK, credentials);
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
        },
      });

      return response.data;
    }
    catch(error: any) {
      throw new Error(error);
    }
  }
}

module.exports = new AuthenticationService();
