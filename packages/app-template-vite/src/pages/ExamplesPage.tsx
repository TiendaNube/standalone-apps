import React from "react";

import { ExampleCard } from "../components";
import { routes } from "../lib";

import { Box } from "@nimbus-ds/components";
import { Page, Layout } from "@nimbus-ds/patterns";

const ExamplesPage: React.FC = () => {
  return (
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
  );
};

export default ExamplesPage;
