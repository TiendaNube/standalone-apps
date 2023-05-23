
import { useMutation, useQuery } from "react-query";
import { useFetch } from "@/hooks";
import { AuthenticationContent, ProductProps } from "@/types";
import { useMemo } from "react";
import { useToast } from "@nimbus-ds/components";
import { IApiResponse } from "@/hooks/useFetch/useFetch.types";

const useProduct = () => {
  const { request } = useFetch();
  const { addToast } = useToast();
  const storage = localStorage.getItem("authentication");
  const authentication = storage
    ? (JSON.parse(storage as string) as AuthenticationContent)
    : null;

  const { data: products,isLoading:loadingProducts, refetch:refetchProducts } = useQuery(
    ["products"],
    () =>
      request<ProductProps[]>({
        url: "/products",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authentication: `bearer ${authentication?.access_token}`,
        },
      }),
    {
      enabled: !!authentication?.access_token,
      refetchOnWindowFocus: false,
      retry: false,
      onError: (error:IApiResponse<unknown>) => {
        addToast({
          type: "danger",
          text: error.message,
          duration: 4000,
          id: "",
        });
      },
    }
  );

  const onDelete = useMutation(
    (id:number) =>
      request({
        url: `/products/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authentication: `bearer ${authentication?.access_token}`,
        },
      }),
    {
      onSuccess: () => {
        addToast({
          type: "success",
          text: "Produto deletado com sucesso",
          duration: 4000,
          id: "",
        });
        refetchProducts();
      },
      onError: (error:IApiResponse<unknown>) => {
        addToast({
          type: "danger",
          text: error.message,
          duration: 4000,
          id: "",
        });
      },
    }
  );


  const IS_LOADING = useMemo(()=> loadingProducts || onDelete.isLoading,[loadingProducts, onDelete.isLoading]);

  return {
    products,
    onDelete,
    IS_LOADING,
  };
};

export default useProduct;
