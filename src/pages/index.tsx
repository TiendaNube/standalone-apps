import Head from "next/head";
import { useProductContext } from "@/components";

import { Page } from "@nimbus-ds/page";
import { Layout } from "@nimbus-ds/layout";
import {
  Button,
  Icon,
  Text,
  Box,
  Link,
  Card,
  Title,
} from "@nimbus-ds/components";
import { ExternalLinkIcon, PlusCircleIcon } from "@nimbus-ds/icons";

export default function Home() {
  const { products, addProducts } = useProductContext();
  const productsQty = products.length;

  const add5Products = () => addProducts(5);

  return (
    <>
      <Head>
        <title>Nimbus app template</title>
        <meta name="description" content="Nimbus app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page maxWidth="800px">
        <Page.Header title="Demo app" />
        <Page.Body>
          <Layout columns="1">
            <Layout.Section>
              <Card>
                <Card.Header title="¡Felicitaciones por crear tu app!" />
                <Card.Body>
                  <Text>
                    ¡Hola! Tu app está casi lista. Cuenta con las bases sólidas
                    que necesitás para comenzar, incluyendo nuestro&nbsp;
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
                    .
                    <br />
                    <br />
                    Con Nimbus a tu disposición, vas a poder crear interfaces de
                    usuario intuitivas y atractivas con gran velocidad, mientras
                    que la API de Tiendanube te permitirá aprovechar al máximo
                    las funcionalidades de eCommerce. ¡Feliz desarrollo!
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
    </>
  );
}
