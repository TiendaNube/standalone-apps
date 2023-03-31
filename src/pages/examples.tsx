import { useEffect, useState } from "react";

import Head from "next/head";

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
import { ExampleCard } from "@/components";

export default function Examples() {
  return (
    <>
      <Head>
        <title>Nimbus app template</title>
        <meta name="description" content="Nimbus app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page maxWidth="800px">
        <Page.Header
          title="Galería de ejemplos"
          subtitle="¿Necesitás ayuda para construir tu app? Usá estos ejemplos de diferentes tipologías de diseño usando Nimbus para construir más rápido y seguro."
        />
        <Page.Body>
          <Layout columns="1">
            <Layout.Section>
              <Box display="flex" flexDirection="column" gap="2">
                <Title as="h2">Autenticación</Title>
                <Text>Pantallas de creación de cuenta, validación de datos e ingreso de usuarios.</Text>
              </Box>
              <Box display="flex" flexWrap="wrap" gap="4">
                <ExampleCard title="Login" />
                <ExampleCard title="Password Recovery" />
                <ExampleCard title="Signup" />
                <ExampleCard title="Login" />
              </Box>
            </Layout.Section>
            <Layout.Section>
              <Box display="flex" flexDirection="column" gap="2">
                <Title as="h2">Tablas de datos</Title>
                <Text>Pantallas con grandes cantidades de datos organizados de forma tabular.</Text>
              </Box>
              <Box display="flex" flexWrap="wrap" gap="4">
                <ExampleCard title="Login" />
                <ExampleCard title="Password Recovery" />
                <ExampleCard title="Signup" />
                <ExampleCard title="Login" />
              </Box>
            </Layout.Section>
            <Layout.Section>
              <Box display="flex" flexDirection="column" gap="2">
                <Title as="h2">Formularios</Title>
                <Text>Pantallas con formularios para carga de datos, edición, etc.</Text>
              </Box>
              <Box display="flex" flexWrap="wrap" gap="4">
                <ExampleCard title="Login" />
                <ExampleCard title="Password Recovery" />
                <ExampleCard title="Signup" />
                <ExampleCard title="Login" />
              </Box>
            </Layout.Section>
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
}
