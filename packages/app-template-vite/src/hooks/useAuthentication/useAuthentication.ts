
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useFetch } from "@/hooks";
import { AuthenticationContent } from "./useAuthentication.types";
import { IApiResponse } from "../useFetch/useFetch.types";


const useAuthentication = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);
  const code = query.get("code");

  const { request } = useFetch();
  const { isLoading:loadingToken,isSuccess: successToken, data } = useQuery(
    ["access-token"],
    () =>
      request<AuthenticationContent>({
        url: code ? `/auth?code=${code}` : "/auth",
        method: "GET",
      }),
    {
      retry: false,
      onSuccess:(data) => {
        localStorage.setItem("authentication",JSON.stringify(data.content))
        navigate("/");
      },
      onError: (error:IApiResponse<AuthenticationContent>)=> {
        localStorage.setItem("authentication","")
        navigate("/error",{ state:{ message: error?.message } });
      },
    }
  );


  const IS_LOADING = useMemo(()=> loadingToken,[loadingToken]);

  const ACCESS_TOKEN = useMemo(()=>{
    if(!IS_LOADING && successToken ){
      const authentication = localStorage.getItem("authentication");
      const content = JSON.parse(authentication as string) as AuthenticationContent
      return content.access_token
    }
  },[IS_LOADING])

  return {
    ACCESS_TOKEN,
    IS_LOADING,
  };
};

export default useAuthentication;
