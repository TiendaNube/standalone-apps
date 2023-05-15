import { StatusCode } from "../../utils/statusCode.enum";

export default interface IProductResponse {
  statusCode: StatusCode,
  data: number[] | string
}
