import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Box, Link, List, Text, Title } from "@nimbus-ds/components";
import { useAuthentication } from "@/hooks";
import Loading from "../LoadingPage/LoadingPage";

const TutorialPage: React.FC = () => {
  const { LOADING_AUTHENTICATION } = useAuthentication();
  const UPDATE_APP_PAGES_URL = `https://partners.nuvemshop.com.br/applications/update/${process.env.CLIENT_ID}`;
  const [t] = useTranslation('translations');
  return (
    <>
      {LOADING_AUTHENTICATION && <Loading />}
      <Box
        width="100%"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        flexDirection="column"
        backgroundColor={"neutral-background"}
      >
        <Box width="1400px">
          <Box marginTop="8">
            <Title as="h1">{t('title')}</Title>
          </Box>

          <Box
            marginTop="8"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <List as="ol">
              <List.Item>
                <Trans
                  i18nKey={t('tutorial.first')}
                  components={[
                    <Link
                      as="a"
                      href={UPDATE_APP_PAGES_URL}
                      target="blank"
                      appearance="primary"
                      children=""
                    />,
                    <Link appearance="primary" textDecoration="none" children="" />
                  ]}
                />
              </List.Item>
              <List.Item>
                <Trans
                  i18nKey={t('tutorial.second')}
                  components={[
                    <Text as="span" fontWeight="bold" children="" />
                  ]}
                />
              </List.Item>
              <List.Item>
                <Trans
                  i18nKey={t('tutorial.third', { clientId: process.env.CLIENT_ID })}
                  components={[
                    <Text as="span" fontWeight="bold" children="" />
                  ]}
                >
                </Trans>
              </List.Item>
              <List.Item>
                <Trans
                  i18nKey={t('tutorial.fourth')}
                  components={[
                    <Text as="span" fontWeight="bold" children="" />
                  ]}
                >
                </Trans>
              </List.Item>
              <List.Item>
                {t('tutorial.fifth')}
              </List.Item>
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TutorialPage;
