import React, { useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import {
  Card,
  Icon,
  Box,
  Title,
  Button,
  Link,
  Text,
  Spinner,
  useToast,
} from "@nimbus-ds/components";
import { ExternalLinkIcon, PlusCircleIcon } from "@nimbus-ds/icons";
import { Page, Layout } from "@nimbus-ds/patterns";
import { useFetch } from "@/hooks";
import { AuthenticationContent } from "@/types";
import { IApiResponse } from "@/hooks/useFetch/useFetch.types";

const HomePage: React.FC = () => {
  const { request } = useFetch();
  const { addToast } = useToast();
  const [productsQuantity, setProductQuantity] = useState<
    number | string | undefined
  >(undefined);
  const storage = localStorage.getItem("authentication");
  const authentication = storage
    ? (JSON.parse(storage as string) as AuthenticationContent)
    : null;

  const { refetch: refetchProducts, isLoading: loadingQuantity } = useQuery(
    ["products-total"],
    () =>
      request<number>({
        url: "/products/total",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authentication: `bearer ${authentication?.access_token}`,
        },
      }),
    {
      enabled: !!authentication?.access_token,
      retry: 2,
      refetchOnWindowFocus: false,
      onSuccess(data) {
        setProductQuantity(data.content);
      },
      onError(err: IApiResponse<unknown>) {
        setProductQuantity("-");
        addToast({
          type: "danger",
          text: err.message,
          duration: 4000,
          id: "",
        });
      },
    }
  );

  const onSubmit = useMutation(
    () =>
      request({
        url: "/products",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authentication: `bearer ${authentication?.access_token}`,
        },
      }),
    {
      onSuccess: () => {
        addToast({
          type: "success",
          text: "Produtos adicionados com sucesso!",
          duration: 4000,
          id: "",
        });
        refetchProducts();
      },
      onError: (err: IApiResponse<unknown>) => {
        addToast({
          type: "danger",
          text: err.message,
          duration: 4000,
          id: "",
        });
      },
    }
  );

  const renderTotal = useMemo(() => {
    if (loadingQuantity) {
      return <Spinner size="medium" />;
    }
    return (
      <Title as="h6" fontSize="h1">
        {productsQuantity as string}
      </Title>
    );
  }, [loadingQuantity, productsQuantity]);

  return (
    <>
      <Page maxWidth="800px">
        <Page.Header title={process.env.APP_NAME || "App Template"} />
        <Page.Body>
          <Layout columns="1">
            <Layout.Section>
              <Card>
                <Card.Header title="Parabéns por criar seu aplicativo!" />
                <Card.Body>
                  <Text>
                    Este apicativo de exemplo inclui nosso&nbsp;
                    <Link
                      as="a"
                      href="https://nimbus.tiendanube.com/"
                      target="_blank"
                      appearance="primary"
                      textDecoration="none"
                    >
                      design system Nimbus
                    </Link>
                    &nbsp;e a integração com a&nbsp;
                    <Link appearance="primary" textDecoration="none">
                      API da Tiendanube/Nuvemshop
                    </Link>
                    &nbsp;para facilitar o desenvolvimento de novos aplicativos
                    para nosso ecosistema.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Link>
                    Conheça mais sobre como criar seu aplicativo
                    <Icon color="currentColor" source={<ExternalLinkIcon />} />
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Header title="Contador de produtos da Loja" />
                <Card.Body>
                  <Box display="flex" flexDirection="column" gap="4" mb="2">
                    <Text>
                      Os produtos de exemplo são criados com o nome e preço
                      aleatórios, como exemplo. Podendo modificá-los e
                      eliminá-los há qualquer momento.
                    </Text>
                    <Box display="flex" flexDirection="column" gap="2">
                      <Text color="neutral-textDisabled">
                        Total de produtos
                      </Text>
                      {renderTotal}
                    </Box>
                  </Box>
                </Card.Body>
                <Card.Footer>
                  <Button
                    appearance="primary"
                    onClick={() => onSubmit.mutate()}
                    disabled={onSubmit.isLoading}
                  >
                    <Icon color="currentColor" source={<PlusCircleIcon />} />
                    Criar 5 produtos
                    {onSubmit.isLoading && (
                      <Spinner color="currentColor" size="small" />
                    )}
                  </Button>
                </Card.Footer>
              </Card>
            </Layout.Section>
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
};

export default HomePage;
