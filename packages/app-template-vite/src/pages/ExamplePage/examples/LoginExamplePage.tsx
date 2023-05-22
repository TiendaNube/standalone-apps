import React from "react";

import { Alert, Box, Button, Card, Checkbox, Input, Link, Text } from "@nimbus-ds/components";
import { FormField } from "@nimbus-ds/patterns";

const LoginExamplePage: React.FC = () => {
  return (
    <Box
      backgroundColor="neutral-surface"
      height={{
        xs: "calc(100vh - 61px)",
        md: "100%",
      }}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="4"
    >
      <Box maxWidth="500px" flex="1">
        <Card>
          <Card.Header title="Título do login" />
          <Card.Body>
            <Box display="flex" flexDirection="column" gap="4">
              <Text>
                Não tem uma conta?&nbsp;
                <Link appearance="primary" textDecoration="none">Crie aqui uma</Link>
              </Text>
              <Alert appearance="danger" title="Mensagem de error">
                Texto do error
              </Alert>
              <Box display="flex" flexDirection="column" gap="2">
                <FormField.Input label="Email" />
                <FormField label="Password">
                  <Input.Password />
                </FormField>
                <Link appearance="primary">Esqueceu sua senha?</Link>
              </Box>
              <Checkbox name="keep-login" label="Manter-se conectado" />
            </Box>
          </Card.Body>
          <Card.Footer>
            <Button appearance="primary">Log in</Button>
          </Card.Footer>
        </Card>
      </Box>
    </Box>
  );
}

export default LoginExamplePage;
