import { StatusCode } from "./statusCode.enum";

export default interface IResponse {
  statusCode: StatusCode;
  data?: string;
}
