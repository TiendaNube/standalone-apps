import axios from "axios";
import IAuthenticationResponse from "../../utils/authenticationResponse.interface";
import { BodyAuthenticationType } from "../../utils/body.type";
import { StatusCode } from "../../utils/statusCode.enum";
import { getCredentials, setCredentials } from "../../utils/jsonServerConfig";
import ICredentials from "../../utils/credentials.interface";

class AuthenticationService {
  public async find(code: string): Promise<IAuthenticationResponse> {
    try {
      if(!code) {
        const credentials = getCredentials();
        if (credentials) {
          return {
            statusCode: StatusCode.OK,
            data: credentials,
          }
        }
        return {
          statusCode: StatusCode.BAD_REQUEST,
          data: "The authorization code not found",
        }
      }

      const body: BodyAuthenticationType = {
        client_id: process.env.CLIENT_ID as string,
        client_secret: process.env.CLIENT_SECRET as string,
        grant_type: "authorization_code",
        code: code,
      }

      const authenticateResponse = await this.authenticateApp(body);

      // This condition will be true when the code has been used or is invalid.
      if(authenticateResponse.error && authenticateResponse.error_description) {
        return {
          statusCode: StatusCode.BAD_REQUEST,
          data: authenticateResponse.error_description,
        }
      }

      // Insert response of Authentication API at config.json file
      setCredentials(authenticateResponse);

      return {
        statusCode: StatusCode.OK,
        data: authenticateResponse,
      }
    } catch (error: any) {
      return {
        statusCode: StatusCode.INTERNAL_SERVER_ERROR,
        data: "Unknown error",
      }
    }
  }


  private async authenticateApp(body: BodyAuthenticationType): Promise<ICredentials> {
    return await axios.post(process.env.AUTHENTICATION_API as string, body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response: any): ICredentials => {
      return response.data;
    })
  }
}

export default new AuthenticationService();
