const axios = require("axios");
import ICredentials from "../../utils/credentials.interface";
import getCredentials from "../../utils/getCredentials.function";
import IHeaders from "../../utils/headers.interface";
import IResponse from "../../utils/response.interface";
import { StatusCode } from "../../utils/statusCode.enum";
import getHeaders from "../utils/getHeaders.function";

class DeleteProductsService {
  public async deleteById(id: number): Promise<IResponse> {
    const credentials: ICredentials = getCredentials();

    if(!credentials.access_token || !credentials.user_id) {
      return {
        statusCode: StatusCode.NOT_FOUND,
        data: "The authorization_code or access_token not found",
      }
    }

    try {
      const headers = getHeaders(credentials.access_token);
      const response = await this.deleteProductById(id, credentials.user_id, headers);

      return {
        statusCode: StatusCode.OK,
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

  private async deleteProductById(productId: number, storeId: number, headers: IHeaders 
  ){
    const url = `${process.env.TIENDANUBE_API}${storeId}/products/${productId}`;

    return axios.delete(url, {
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

module.exports = new DeleteProductsService();
