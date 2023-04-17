import Head from "next/head";

import { Page, Layout } from "@nimbus-ds/patterns";
import { Box } from "@nimbus-ds/components";
import { ExampleCard } from "@/components";
import { routes } from "@/lib";

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
              <Box display="flex" flexWrap="wrap" gap="4">
                {routes?.exampleRoutes.map((route) => (
                  <ExampleCard key={route.slug} title={route.title} href={route.slug} />
                ))}
              </Box>
            </Layout.Section>
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
}
