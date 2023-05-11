const axios = require("axios");
import getCredentials from "../../utils/getCredentials.function";
import sendApiResponse from "../../utils/sendApiResponse.function";
import generateProduct from "../utils/generateProduct.function";
import Product from "../utils/product.interface";
import { StatusCode } from "./../../utils/statusCode.enum";
class ProductService {
  public async insertFiveProducts(request:any, response:any) {
    try {
      const credentials = getCredentials();

      if(!credentials.access_token) {
        return sendApiResponse(response, StatusCode.BAD_REQUEST, { message: "Authorization code not found" });
      }

      let products: Product[] = [];
      for(let index = 0; index < 4; index += 1) {
        const product = generateProduct();

        products.push
          (await this.insertProducts(credentials.user_id, this.getHeader(credentials.access_token), product));
      }

      return sendApiResponse(response, StatusCode.CREATED, products);
    } catch (error: any) {
      return sendApiResponse(response, error.response.status, { message: error.message });
    }
  }

  private getHeader(accessToken: string) {
    return {
      "Content-Type": "application/json",
      "Authentication": `bearer ${accessToken}`,
      "User-Agent": `My App (${process.env.USER_EMAIL})`,
    }
  }

  private async insertProducts(storeId: number, header: any, body: any) {
    const url = `${process.env.TIENDANUBE_API}${storeId}/products`;

    return axios.post(url, body, {
      headers: header,
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
