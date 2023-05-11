const axios = require("axios");
import getCredentials from "../../utils/getCredentials.function";
import IHeaders from "../../utils/headers.interface";
import sendApiResponse from "../../utils/sendApiResponse.function";
import generateProduct from "../utils/generateProduct.function";
import IProduct from "../utils/product.interface";
import { StatusCode } from "./../../utils/statusCode.enum";
class ProductService {
  public async insertFiveProducts(request:any, response:any) {
    try {
      const credentials = getCredentials();

      if(!credentials.access_token) {
        return sendApiResponse(response, StatusCode.BAD_REQUEST, { message: "Authorization code not found" });
      }

      let products: IProduct[] = [];
      const headers = this.getHeader(credentials.access_token);
      for(let index = 0; index < 4; index += 1) {
        const randomProduct: IProduct = generateProduct();

        const product = await this.insertProduct(credentials.user_id, headers, randomProduct);

        products.push(product);
      }

      return sendApiResponse(response, StatusCode.CREATED, products);
    } catch (error: any) {
      return sendApiResponse(response, error.response.status, { message: error.message });
    }
  }

  private getHeader(accessToken: string): IHeaders {
    return {
      "Content-Type": "application/json",
      "Authentication": `bearer ${accessToken}`,
      "User-Agent": `${process.env.APP_NAME} (${process.env.USER_EMAIL})`,
    }
  }

  private async insertProduct(storeId: number, headers:IHeaders 
  , body: IProduct) {
    const url = `${process.env.TIENDANUBE_API}${storeId}/products`;

    return axios.post(url, body, {
      headers,
    })
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      throw new Error(error);
    });
  }

}

module.exports = new ProductService();
