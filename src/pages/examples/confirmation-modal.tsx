import Head from "next/head";

import { Page } from "@nimbus-ds/page";
import { Layout } from "@nimbus-ds/layout";
import { MenuButton } from "@nimbus-ds/menubutton";
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
import { useState } from "react";

export default function ConfirmationModalExample() {
  const [openModal, setOpenModal] = useState(true);

  const handleOpenModal = () => setOpenModal(!openModal);
  
  const popoverContent = (
    <Box display="flex" flexDirection="column" width="100%">
      <MenuButton label="Acción secundaria" />
      <MenuButton label="Acción secundaria" />
      <MenuButton label="Acción secundaria" />
    </Box>
  );

  const buttonStack = (
    <>
      <IconButton source={<ChevronLeftIcon />} size="2rem" />
      <IconButton source={<ChevronRightIcon />} size="2rem" />
      <Popover content={popoverContent} arrow={false} padding="small">
        <Button>
          Menú contextual
          <Icon source={<ChevronDownIcon />} />
        </Button>
      </Popover>
      <Button>
        Acción secundaria
        <Icon source={<DownloadIcon />} />
      </Button>
      <Button appearance="primary">
        <Icon color="neutral-background" source={<PlusCircleIcon />} />
        Acción primaria
      </Button>
    </>
  );

  return (
    <>
      <Head>
        <title>Nimbus app template</title>
        <meta name="description" content="Nimbus app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page maxWidth="1200px">
        <Page.Header
          title="Plantilla de página"
          subtitle="Subtítulo de la página"
          buttonStack={buttonStack}
        >
          <Box display="flex" gap="2">
            <Tag appearance="primary">Tag de ejemplo</Tag>
            <Tag>Tag de ejemplo</Tag>
          </Box>
          <Alert title="Alert de ejemplo">
            Este es un alert de ejemplo en el header de la página
          </Alert>
          <Box display="flex" flexDirection="column" gap="2">
            <Box display="flex" gap="1">
              <Input.Search placeholder="Buscar" />
              <Button><Icon color="currentColor" source={<SearchIcon />} /></Button>
            </Box>
            <Box display="flex" gap="2" alignItems="center">
              <Text>150 órdenes</Text>
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
              <Button appearance="danger" onClick={handleOpenModal}>Abrir modal de confirmación</Button>
            </Box>
          </Layout>
        </Page.Body>
      </Page>
      <Modal open={openModal} onDismiss={handleOpenModal}>
        <Modal.Header title="Modal de confirmación" />
        <Modal.Body padding="none">
          <Text>¿Estás seguro que querés eliminar?</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOpenModal}>Cancelar</Button>
          <Button appearance="danger">Sí, eliminar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
