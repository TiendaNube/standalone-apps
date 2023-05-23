
import { useMutation, useQuery } from "react-query";
import { useFetch } from "@/hooks";
import { AuthenticationContent } from "@/hooks/useAuthentication/useAuthentication.types";
import { ProductProps } from "@/types";
import { useMemo } from "react";
import { useToast } from "@nimbus-ds/components";

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
      retry: false,
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
      onError: () => {
        addToast({
          type: "danger",
          text: "Erro ao deletar produto",
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
