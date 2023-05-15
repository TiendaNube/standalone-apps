const jsonServer = require("json-server");
const axios = require("axios");
const database = jsonServer.router("db.json");
import IAuthenticationResponse from "../../utils/authenticationResponse.interface";
import { BodyAuthenticationType } from "../../utils/body.type";
import IResponse from "../../utils/response.interface";
import { StatusCode } from "./../../utils/statusCode.enum";

class AuthenticationService {
  public async find(code: string): Promise<IAuthenticationResponse | IResponse> {
    try {
      if(!code) {
        return {
          statusCode: StatusCode.BAD_REQUEST,
          data: "The authorization code not found",
        }
      }

      if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
        return {
          statusCode: StatusCode.BAD_REQUEST,
          data: "Its necessary set request variables at .env-example file and rename to .env file",
        }
      } 

      const body: BodyAuthenticationType = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "authorization_code",
        code: code,
      }

      const authenticateResponse = await this.authenticateApp(body);

      // This condition will be true when the code has been used or is invalid.
      if(!authenticateResponse.data.access_token && authenticateResponse.data.error_description) {
        return {
          statusCode: StatusCode.BAD_REQUEST,
          data: authenticateResponse.data.error_description,
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


  private async authenticateApp(body: any): Promise<IAuthenticationResponse> {
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
