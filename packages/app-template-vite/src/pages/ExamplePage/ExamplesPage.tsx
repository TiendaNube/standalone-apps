import React from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@nimbus-ds/components";
import { Page, Layout } from "@nimbus-ds/patterns";
import { ExampleCard } from "@/components";

interface IExampleRoutes {
  title: string,
  name: string,
  slug: string
}

const ExamplesPage: React.FC = () => {
  const [t] = useTranslation(['translations', 'example-routes']);

  const exampleRoutes = t(`example-routes:routes`, { returnObjects: true }) as Array<IExampleRoutes>;

  return (
    <Page maxWidth="800px">
      <Page.Header
        title={t('example.title')}
        subtitle={t('example.subtitle')}
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
