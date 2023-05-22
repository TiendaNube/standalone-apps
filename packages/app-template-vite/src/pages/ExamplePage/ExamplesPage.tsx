import React from "react";

import { Box } from "@nimbus-ds/components";
import { Page, Layout } from "@nimbus-ds/patterns";
import { ExampleCard } from "@/components";
import { exampleRoutes } from "./exampleRoutes";

const ExamplesPage: React.FC = () => {
  return (
    <Page maxWidth="800px">
      <Page.Header
        title="Galeria de exemplos"
        subtitle="Precisa de ajuda para criar seu aplicativo? Use estes exemplos de diferentes Tipologias de design usando Nimbus para construir mais rápido e seguro."
      />
      <Page.Body>
        <Layout columns="1">
          <Layout.Section>
            <Box display="flex" flexWrap="wrap" gap="4">
              {exampleRoutes.map((route) => (
                <ExampleCard
                  key={route.slug}
                  title={route.title}
                  href={route.slug}
                />
              ))}
            </Box>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default ExamplesPage;
