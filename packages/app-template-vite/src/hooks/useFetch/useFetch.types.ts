export interface IApiResponse<T> {
  content?: T;
  message: string;
  statusCode: number;
}
