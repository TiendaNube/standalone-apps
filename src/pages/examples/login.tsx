import Head from "next/head";

import { Alert, Box, Button, Card, Checkbox, Input, Link, Text } from "@nimbus-ds/components";
import { FormField } from "@nimbus-ds/patterns";

export default function LoginExample() {
  return (
    <>
      <Head>
        <title>Nimbus app template</title>
        <meta name="description" content="Nimbus app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        backgroundColor="neutral-surface"
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box maxWidth="500px" flex="1">
          <Card>
            <Card.Header title="Título del login" />
            <Card.Body>
              <Box display="flex" flexDirection="column" gap="4">
                <Text>
                  ¿No tenés una cuenta?&nbsp;
                  <Link appearance="primary" textDecoration="none">Creá acá una</Link>
                </Text>
                <Alert appearance="danger" title="Mensaje de error">
                  Texto del error
                </Alert>
                <Box display="flex" flexDirection="column" gap="2">
                  <FormField.Input label="Email" />
                  <FormField label="Password">
                    <Input.Password />
                  </FormField>
                  <Link appearance="primary">¿Olvidaste tu contraseña?</Link>
                </Box>
                <Checkbox name="keep-login" label="Mantenerme conectado" />
              </Box>
            </Card.Body>
            <Card.Footer>
              <Button appearance="primary">Log in</Button>
            </Card.Footer>
          </Card>
        </Box>
      </Box>
    </>
  );
}
