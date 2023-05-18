const axios = require("axios");
import ICredentials from "../../utils/credentials.interface";
import IHeaders from "../../utils/headers.interface";
import generateProduct from "../utils/generateProduct.function";
import IProduct from "../utils/product.interface";
import IProductResponse from "../utils/productResponse.interface";
import { StatusCode } from "../../utils/statusCode.enum";
import { getCredentials } from "../../utils/jsonServerConfig";

class InsertFiveProductsService {
  public async store(): Promise<IProductResponse> {
    try {
      const credentials: ICredentials = getCredentials();
      let products:number[] = [];
      for(let index = 0; index < 5; index += 1) {
        const randomProduct: IProduct = generateProduct();
      
        const product = await this.insertProduct(credentials.user_id as number, this.getHeader(credentials.access_token as string), randomProduct);

        products.push(product);
      }
      return {
        statusCode: StatusCode.CREATED,
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

  private getHeader(accessToken: string): IHeaders {
    return {
      "Content-Type": "application/json",
      "Authentication": `bearer ${accessToken}`,
      "User-Agent": `${process.env.APP_NAME} (${process.env.USER_EMAIL})`,
    }
  }

  private async insertProduct(storeId: number, headers: IHeaders
  , body: IProduct){
    const url = `${process.env.TIENDANUBE_API}${storeId}/products`;

    return axios.post(url, body, {
      headers,
    })
    .then((response: any) => {
      return response.data.id
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

export default new InsertFiveProductsService();
