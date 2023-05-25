import React, { useState } from "react";

import { Page, Layout, MenuButton } from "@nimbus-ds/patterns";
import {
  Alert,
  Box,
  Button,
  Chip,
  Icon,
  IconButton,
  Input,
  Modal,
  Popover,
  Tag,
  Text,
} from "@nimbus-ds/components";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  PlusCircleIcon,
  SearchIcon,
} from "@nimbus-ds/icons";

const ConfirmationModalExamplePage: React.FC = () => {
  const [openModal, setOpenModal] = useState(true);

  const handleOpenModal = () => setOpenModal(!openModal);
  
  const popoverContent = (
    <Box display="flex" flexDirection="column" width="100%">
      <MenuButton label="Ação secundária" />
      <MenuButton label="Ação secundária" />
      <MenuButton label="Ação secundária" />
    </Box>
  );

  const buttonStack = (
    <>
      <IconButton source={<ChevronLeftIcon />} size="2rem" />
      <IconButton source={<ChevronRightIcon />} size="2rem" />
      <Popover content={popoverContent} arrow={false} padding="small">
        <Button>
          Menu de contexto
          <Icon source={<ChevronDownIcon />} />
        </Button>
      </Popover>
      <Button>
        Ação secundária
        <Icon source={<DownloadIcon />} />
      </Button>
      <Button appearance="primary">
        <Icon color="neutral-background" source={<PlusCircleIcon />} />
        Ação primária
      </Button>
    </>
  );

  return (
    <>
      <Page maxWidth="1200px">
        <Page.Header
          title="Modelo de página"
          subtitle="Subtítulo da página"
          buttonStack={buttonStack}
        >
          <Box display="flex" gap="2">
            <Tag appearance="primary">Tag de exemplo</Tag>
            <Tag>Tag de exemplo</Tag>
          </Box>
          <Alert title="Alerta de exemplo">
            Este é um alerta de exemplo no cabeçalho da página
          </Alert>
          <Box display="flex" flexDirection="column" gap="2">
            <Box display="flex" gap="1">
              <Input.Search placeholder="Buscar" />
              <Button><Icon color="currentColor" source={<SearchIcon />} /></Button>
            </Box>
            <Box display="flex" gap="2" alignItems="center">
              <Text>150 ordens</Text>
              <Chip text="Filtro aplicado" removable />
            </Box>
          </Box>
        </Page.Header>
        <Page.Body>
          <Layout columns="1">
            <Box
              width="100%"
              p="4"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderColor="neutral-interactive"
              borderStyle="dashed"
              borderWidth="1px"
              borderRadius=".5rem"
            >
              <Button appearance="danger" onClick={handleOpenModal}>Abrir modal de confirmação</Button>
            </Box>
          </Layout>
        </Page.Body>
      </Page>
      <Modal open={openModal} onDismiss={handleOpenModal}>
        <Modal.Header title="Modal de confirmação" />
        <Modal.Body padding="none">
          <Text>Tem certeza que deseja excluir?</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOpenModal}>Cancelar</Button>
          <Button appearance="danger">Excluir</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModalExamplePage;
