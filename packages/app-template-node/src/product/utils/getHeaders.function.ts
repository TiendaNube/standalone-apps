import IHeaders from "../../utils/headers.interface";

export default function getHeaders(accessToken: string): IHeaders {
  return {
    "Content-Type": "application/json",
    "Authentication": `bearer ${accessToken}`,
    "User-Agent": `${process.env.APP_NAME} (${process.env.USER_EMAIL})`,
  }
}
