const axios = require("axios");
import ICredentials from "../../utils/credentials.interface";
import IHeaders from "../../utils/headers.interface";
import { getCredentials } from "../../utils/jsonServerConfig";
import IResponse from "../../utils/response.interface";
import { StatusCode } from "../../utils/statusCode.enum";
import getHeaders from "../utils/getHeaders.function";

class DeleteProductsService {
  public async deleteById(id: string): Promise<IResponse> {
    try {
      const credentials: ICredentials = getCredentials();
      const headers = getHeaders(credentials.access_token as string);
      await this.deleteProductById(+id, credentials.user_id as number, headers);

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
    .catch((error: any) => {
      const errorObject = {
        statusCode: error.response.status,
        data: error.response.data.description,
      }
      throw new Error(JSON.stringify(errorObject));
    });
  }

}

export default new DeleteProductsService();
