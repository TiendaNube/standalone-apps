const axios = require("axios");
import ICredentials from "../../utils/credentials.interface";
import getCredentials from "../../utils/getCredentials.function";
import IHeaders from "../../utils/headers.interface";
import IResponse from "../../utils/response.interface";
import { StatusCode } from "../../utils/statusCode.enum";
import getHeaders from "../utils/getHeaders.function";
class GetTotalProductsService {
  public async findAll(): Promise<IResponse> {
    try {
      const credentials: ICredentials = getCredentials();
      
      if(credentials.access_token && credentials.user_id) {
          const headers = getHeaders(credentials.access_token);
          const products = await this.getAllProductsId(credentials.user_id, headers);
          return {
            statusCode: StatusCode.OK,
            data: products.length,
          }
      }

      return {
        statusCode: StatusCode.NOT_FOUND,
        data: "The authorization_code or access_token not found",
      }


    } catch (error: any) {
      let statusCode;
      let data;

      if (error instanceof Error) {
        const errorObject = JSON.parse(error.message);
        statusCode = errorObject.statusCode;
        data = errorObject.data;
      } else {
        statusCode = StatusCode.INTERNAL_SERVER_ERROR;
        data = "Unknown error";
      }

      return {
        statusCode,
        data,
      };
    }
  }

  private async getAllProductsId(storeId: number, headers:IHeaders 
  ){
    const url = `${process.env.TIENDANUBE_API}${storeId}/products?fields=id`;

    return axios.get(url, {
      headers,
    })
    .then((response: any) => {
      return response.data
    })
    .catch((error: any) => {
      const errorObject = {
        statusCode: error.response.status,
        data: error.response.data.description,
      }
      throw new Error(JSON.stringify(errorObject));
    });
  }

}

module.exports = new GetTotalProductsService();
