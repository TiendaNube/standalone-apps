import ICredentials from "./credentials.interface";
import { StatusCode } from "./statusCode.enum";

export default interface IAuthenticationResponse {
  statusCode: StatusCode;
  data: ICredentials;
}
