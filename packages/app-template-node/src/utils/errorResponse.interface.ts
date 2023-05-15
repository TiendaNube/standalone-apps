import { StatusCode } from "./statusCode.enum";

export default interface IErrorResponse {
  statusCode: StatusCode;
  error: string;
}
