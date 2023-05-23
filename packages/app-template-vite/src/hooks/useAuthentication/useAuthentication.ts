
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useFetch } from "@/hooks";
import { IApiResponse } from "../useFetch/useFetch.types";
import { useToast } from "@nimbus-ds/components";
import { AuthenticationContent } from "@/types";


const useAuthentication = () => {
  const query = new URLSearchParams(window.location.search);
  const code = query.get("code");

  const { request } = useFetch();
  const { addToast } = useToast();

  const { isLoading:loadingToken } = useQuery(
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
        window.location.href= "/"
      },
      onError: (error:IApiResponse<unknown>)=> {
          addToast({
            type: "danger",
            text:error?.message,
            duration: 4000,
            id: "",
          });
      },
    }
  );


  const LOADING_AUTHENTICATION = useMemo(()=> loadingToken,[loadingToken]);

  return {
    LOADING_AUTHENTICATION,
  };
};

export default useAuthentication;
