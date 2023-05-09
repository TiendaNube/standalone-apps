const jsonServer = require("json-server");
const axios = require("axios");
const database = jsonServer.router("db.json");
import { StatusCode } from "./../../utils/statusCode.enum";

class AuthenticationService {
  public async find(request: any, response: any) {
    try {
      if(request.query.code) {
        const body = this.getBody(request.query.code);
        const accessTokenResponse = await this.getAccessToken(body);

        if(!accessTokenResponse.error){
          database.db.set("credentials", accessTokenResponse).write();
          return this.sendApiResponse(response, StatusCode.OK, accessTokenResponse);
        }

        return this.sendApiResponse(response, StatusCode.BAD_REQUEST, { message: accessTokenResponse.error_description });
      }
      const credentials = this.getCredentials();

      if(!credentials) {
        return this.sendApiResponse(response, StatusCode.BAD_REQUEST, { message: "Authorization code not found" });
      }

      return this.sendApiResponse(response, StatusCode.OK, credentials);
    }
    catch(error: any) {
      return this.sendApiResponse(response, StatusCode.INTERNAL_SERVER_ERROR, { message: error.message });
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

  private getCredentials() {
    return database.db.get("credentials").value();
  }

  private sendApiResponse(response:any, statusCode: number, message: {}) {
    return response.status(statusCode).json(message);
  }

  private async getAccessToken(body: any) {
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
