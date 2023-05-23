const axios = require("axios");
import ICredentials from "../../utils/credentials.interface";
import IHeaders from "../../utils/headers.interface";
import { getCredentials } from "../../utils/jsonServerConfig";
import IResponse from "../../utils/response.interface";
import { StatusCode } from "../../utils/statusCode.enum";
import getHeaders from "../utils/getHeaders.function";
class ListAllProductsService
{
  public async findAll(): Promise<IResponse> {
    try {
      const credentials: ICredentials = getCredentials();
      const headers = getHeaders(credentials.access_token as string);
      const products = await this.getAllProductsId(credentials.user_id as number, headers);
      return {
        statusCode: StatusCode.OK,
        data: products,
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

  private async getAllProductsId(storeId: number, headers: IHeaders 
  ){
    const url = `${process.env.TIENDANUBE_API}${storeId}/products?fields=id,images,name`;

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

export default new ListAllProductsService
();
