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
  const [productsQuantity, setProductQuantity] = useState<number | string>("-");
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
      return <Spinner />;
    } else {
      if (productsQuantity) {
        return (
          <Title as="h6" fontSize="h1">
            {productsQuantity}
          </Title>
        );
      }
    }
  }, [loadingQuantity, productsQuantity]);

  return (
    <>
      <Page maxWidth="800px">
        <Page.Header title="Demo app" />
        <Page.Body>
          <Layout columns="1">
            <Layout.Section>
              <Card>
                <Card.Header title="¡Felicitaciones por crear tu app!" />
                <Card.Body>
                  <Text>
                    Esta app de ejemplo incluye nuestro&nbsp;
                    <Link
                      as="a"
                      href="https://nimbus.tiendanube.com/"
                      target="_blank"
                      appearance="primary"
                      textDecoration="none"
                    >
                      design system Nimbus
                    </Link>
                    &nbsp;y la integración a la&nbsp;
                    <Link appearance="primary" textDecoration="none">
                      API de Tiendanube
                    </Link>
                    &nbsp;para facilitar el desarrollo de nuevas aplicaciones
                    para nuestro ecosistema.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Link>
                    Conocé más sobre cómo crear tu app
                    <Icon color="currentColor" source={<ExternalLinkIcon />} />
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Header title="Contador de productos de Tienda demo" />
                <Card.Body>
                  <Box display="flex" flexDirection="column" gap="4" mb="2">
                    <Text>
                      Los productos de ejemplo se crean con un nombre y precio
                      aleatorios, a modo de prueba. Podés modificarlos o
                      eliminarlos en cualquier momento.
                    </Text>
                    <Box display="flex" flexDirection="column" gap="2">
                      <Text color="neutral-textDisabled">
                        Total de productos
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
                    Crear 5 productos
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
