import ICredentials from "../../utils/credentials.interface";
import { StatusCode } from "../../utils/statusCode.enum";

export default interface IAuthenticationResponse {
  statusCode: StatusCode;
  data: ICredentials | string;
}
