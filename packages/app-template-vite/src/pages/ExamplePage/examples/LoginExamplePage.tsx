import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Alert, Box, Button, Card, Checkbox, Input, Link, Text } from "@nimbus-ds/components";
import { FormField } from "@nimbus-ds/patterns";

const LoginExamplePage: React.FC = () => {
  const [t] = useTranslation('examples');
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
          <Card.Header title={t('login.title')} />
          <Card.Body>
            <Box display="flex" flexDirection="column" gap="4">
              <Text>
                <Trans i18nKey={t('login.create-account')} components={[
                  <Link appearance="primary" textDecoration="none" children="" />
                ]} />
              </Text>
              <Alert appearance="danger" title={t('login.error-title')}>
              {t('login.error')}
              </Alert>
              <Box display="flex" flexDirection="column" gap="2">
                <FormField.Input label={t('login.email')} />
                <FormField label={t('login.password')}>
                  <Input.Password />
                </FormField>
                <Link appearance="primary">{t('login.forgot-password')}</Link>
              </Box>
              <Checkbox name="keep-login" label={t('login.keep-connection')} />
            </Box>
          </Card.Body>
          <Card.Footer>
            <Button appearance="primary">{t('login.button-login')}</Button>
          </Card.Footer>
        </Card>
      </Box>
    </Box>
  );
}

export default LoginExamplePage;
