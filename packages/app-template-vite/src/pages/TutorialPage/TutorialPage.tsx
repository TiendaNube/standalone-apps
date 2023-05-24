import React from "react";
import { Box, Link, List, Text, Title } from "@nimbus-ds/components";
import { useAuthentication } from "@/hooks";
import Loading from "../LoadingPage/LoadingPage";

const TutorialPage: React.FC = () => {
  const { LOADING_AUTHENTICATION } = useAuthentication();
  const UPDATE_APP_PAGES_URL = `https://partners.nuvemshop.com.br/applications/update/${process.env.CLIENT_ID}`;
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
            <Title as="h1">Finalize o processo de autenticação</Title>
          </Box>

          <Box
            marginTop="8"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <List as="ul">
              <List.Item>
                Acesse a página de{" "}
                <Link
                  as="a"
                  href={UPDATE_APP_PAGES_URL}
                  target="blank"
                  appearance="primary"
                >
                  ediçao de dados
                </Link>{" "}
                do seu app no portal de parceiros
              </List.Item>
              <List.Item>
                Altere o campo URL de redirecionamento após instalação para o
                endereço{" "}
                <Text as="span" fontWeight="bold">{`http://localhost:8000
              `}</Text>
              </List.Item>
              <List.Item>
                Adicione ao{" "}
                <Text as="span" fontWeight="bold">
                  {`/admin/apps/${process.env.CLIENT_ID}/authorize`}
                </Text>{" "}
                ao fim da url da loja onde vai ser instalado o app
              </List.Item>
              <List.Item>
                Clique no botão{" "}
                <Text as="span" fontWeight="bold">
                  instalar aplicativo
                </Text>
              </List.Item>
              <List.Item>
                Ao ser redirecionado para o app template, iremos fazer a
                requisição que irá finalizar o processo de autenticação
              </List.Item>
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TutorialPage;
