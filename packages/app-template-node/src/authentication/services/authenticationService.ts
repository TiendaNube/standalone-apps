const jsonServer = require("json-server");
const axios = require("axios");
const database = jsonServer.router("db.json");

class AuthenticationService {
  public async find(request: any, response: any) {
    try {
      if(!request.query.code) {
        throw new Error("Authorization code not found");
      }

      const body = this.getBody(request.query.code);

      const accessTokenResponse = await this.getAccessToken(body);

      database.db.set("credentials", accessTokenResponse).write();

      response.status(200).json(accessTokenResponse);
    }
    catch(error: any) {
      response.status(500).json({ message: error.message });
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
