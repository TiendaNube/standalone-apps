import { useCallback } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "../../commons/axios/axiosApiInstance";
import { IApiResponse } from "./useFetch.types";

const useFetch = () => {
  const request = useCallback(
    async <T>(params: AxiosRequestConfig) => {
      let axiosResponse: AxiosResponse<IApiResponse<T>>;
      try {
        axiosResponse = await axios.request(params);
        return {
          message: "",
          content: axiosResponse?.data,
          statusCode: axiosResponse?.status,
        };
      } catch (error: any) {
        axiosResponse = error.response;
        return Promise.reject({
          message: axiosResponse.data.message || "error",
          content: axiosResponse?.data?.content ?? null,
          statusCode: axiosResponse?.status,
        });
      }
    },
    []
  );

  return { request };
};

export default useFetch;
