const jsonServer = require("json-server");
const axios = require("axios");
const database = jsonServer.router("db.json");
import IAuthenticationResponse from "../../utils/authenticationResponse.interface";
import IErrorResponse from "../../utils/errorResponse.interface";
import { StatusCode } from "./../../utils/statusCode.enum";

class AuthenticationService {
  public async find(code: string): Promise<IAuthenticationResponse | IErrorResponse> {
    try {
      if(!code) {
        return {
          statusCode: StatusCode.BAD_REQUEST,
          error: "The authorization code not found",
        }
      }

      const body = this.getBody(code);

      const authenticateResponse = await this.authenticateApp(body);

      // This condition will be true when the code has been used or is invalid.
      if(!authenticateResponse.data.access_token) {
        return {
          statusCode: StatusCode.BAD_REQUEST,
          error: authenticateResponse.data.error_description,
        }
      }

      database.db.set("credentials", authenticateResponse.data).write();

      return authenticateResponse;
    }
    catch(error: any) {
      return {
        statusCode: error.status,
        data: error,
      }
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
}

module.exports = new AuthenticationService();
