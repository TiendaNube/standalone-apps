import axios, { AxiosInstance } from "axios";
import IHeaders from "./headers.interface";

class CustomAxios {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create();
  }

  public setHeaders(headers:IHeaders): void {
    this.instance.interceptors.request.use((config) => {
      for (let key in headers) {
        config.headers[key] = headers[key];
      }
      return config;
    })
  }

  public getAxiosInstance(): AxiosInstance {
    return this.instance;
  }
}

export default new CustomAxios();
