import React, { useState } from "react";

import { Page, Layout, InteractiveList } from "@nimbus-ds/patterns";
import {
  Card,
  Text,
  Checkbox,
  Radio,
  Box,
  Title,
  Toggle,
  IconButton,
  Tag,
  Button,
} from "@nimbus-ds/components";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
} from "@nimbus-ds/icons";

const SettingsExamplePage: React.FC = () => {
  const [openCollapsible, setOpenCollapsible] = useState(false);

  const handleCollapsible = () => setOpenCollapsible(!openCollapsible);

  return (
    <Page maxWidth="800px">
      <Page.Header title="Página de ajustes" />
      <Page.Body>
        <Layout columns="1">
          <Layout.Section>
            <Card>
              <Card.Header title="Título" />
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="2">
                  <Text>Texto</Text>
                  <Checkbox label="Checkbox 1" name="checkbox-1" />
                  <Checkbox label="Checkbox 2" name="checkbox-2" />
                  <Checkbox label="Checkbox 3" name="checkbox-3" />
                </Box>
              </Card.Body>
            </Card>
            <Card>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Title as="h3">Ajustes instantâneos</Title>
                <Toggle name="instant-settings" />
              </Box>
            </Card>
            <Card>
              <Card.Header title="Título" />
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="2">
                  <Text>Texto</Text>
                  <form>
                    <Radio label="Radio 1" name="radio-settings" id="radio-1" />
                    <Radio label="Radio 2" name="radio-settings" id="radio-2" />
                    <Radio label="Radio 3" name="radio-settings" id="radio-3" />
                  </form>
                </Box>
              </Card.Body>
            </Card>
            <Card>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Title as="h3">Card colapsable</Title>
                <IconButton
                  source={
                    openCollapsible ? <ChevronUpIcon /> : <ChevronDownIcon />
                  }
                  backgroundColor="transparent"
                  borderColor="transparent"
                  size="2rem"
                  onClick={handleCollapsible}
                />
              </Box>
              {openCollapsible && (
                <Box
                  display="flex"
                  justifyContent="center"
                  borderColor="primary-interactive"
                  borderStyle="dashed"
                  borderWidth="1"
                  borderRadius="0-5"
                  backgroundColor="primary-surface"
                  p="4"
                  mt="4"
                >
                  <Text>Conteúdo do colapsable</Text>
                </Box>
              )}
            </Card>
            <Card padding="none">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="4"
              >
                <Title as="h3">Ajustes adicionais</Title>
                <Tag appearance="success">Estado do card</Tag>
              </Box>
              <InteractiveList>
                <InteractiveList.ButtonItem
                  title="Título"
                  iconButton={{ onClick: () => {} }}
                >
                  <Text fontSize="caption">Descrição</Text>
                </InteractiveList.ButtonItem>
                <InteractiveList.ButtonItem
                  title="Título"
                  iconButton={{ onClick: () => {} }}
                >
                  <Text fontSize="caption">Descrição</Text>
                </InteractiveList.ButtonItem>
                <InteractiveList.ButtonItem
                  title="Título"
                  iconButton={{ onClick: () => {} }}
                >
                  <Text fontSize="caption">Descrição</Text>
                </InteractiveList.ButtonItem>
              </InteractiveList>
            </Card>
            <Card>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb="4"
              >
                <Title as="h3">Card header com ação</Title>
                <IconButton source={<ExternalLinkIcon />} size="2rem" />
              </Box>
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="2">
                  <form>
                    <Radio label="Radio 1" name="radio-settings" id="radio2-1" />
                    <Radio label="Radio 2" name="radio-settings" id="radio2-2" />
                    <Radio label="Radio 3" name="radio-settings" id="radio2-3" />
                  </form>
                </Box>
              </Card.Body>
            </Card>
            <Box display="flex" justifyContent="flex-end" gap="2">
              <Button>Cancelar</Button>
              <Button appearance="primary">Salvar</Button>
            </Box>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
}

export default SettingsExamplePage;
