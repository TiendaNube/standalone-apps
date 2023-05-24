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
                Acesse{" "}
                <Link
                  as="a"
                  href={UPDATE_APP_PAGES_URL}
                  target="blank"
                  appearance="primary"
                >
                  Dados básicos
                </Link>{" "}
                em detalhes do aplicativo, no portal de parceiros.
              </List.Item>
              <List.Item>
                No campo URL de redirecionamento, copie e cole o endereço{" "}
                <Text as="span" fontWeight="bold">{`http://localhost:8000
              `}</Text>
              </List.Item>
              <List.Item>
                Copie este final da URL{" "}
                <Text as="span" fontWeight="bold">
                  {`/admin/apps/${process.env.CLIENT_ID}/authorize`}
                </Text>{" "}
                e cole no final da URL da loja que você vai instalar o aplicativo
              </List.Item>
              <List.Item>
                Clique no botão{" "}
                <Text as="span" fontWeight="bold">
                  Aceitar e começar a usar{""}
                </Text>
                <Text>para instalar o aplicativo</Text>
              </List.Item>
              <List.Item>
                Após o redirecionamento para Template de aplicativo, a requisição será executada e o processo de autenticação estará concluído
              </List.Item>
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TutorialPage;
