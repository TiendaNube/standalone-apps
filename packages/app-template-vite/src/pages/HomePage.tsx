import React from "react";

import { useProductContext } from "../components";

import { Card, Icon, Box, Title, Button, Link, Text } from "@nimbus-ds/components";
import { ExternalLinkIcon, PlusCircleIcon } from "@nimbus-ds/icons";
import { Page, Layout } from "@nimbus-ds/patterns";

const HomePage: React.FC = () => {
  const { products, addProducts } = useProductContext();
  const productsQty = products.length;

  const add5Products = () => addProducts(5);

  return (
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
                    <Title as="h6" fontSize="h1" color="primary-textLow">
                      {productsQty}
                    </Title>
                  </Box>
                </Box>
              </Card.Body>
              <Card.Footer>
                <Button appearance="primary" onClick={add5Products}>
                  <Icon color="currentColor" source={<PlusCircleIcon />} />
                  Crear 5 productos
                </Button>
              </Card.Footer>
            </Card>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default HomePage;
