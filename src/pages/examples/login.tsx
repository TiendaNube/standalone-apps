import Head from "next/head";

import { Page, Layout } from "@nimbus-ds/patterns";

export default function LoginExample() {
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
          title="Pantalla de ajustes"
        />
        <Page.Body>
          <Layout columns="1">Page content goes here</Layout>
        </Page.Body>
      </Page>
    </>
  );
}
