import React from "react";

import { Page, Layout, MenuButton } from "@nimbus-ds/patterns";
import {
  Alert,
  Box,
  Button,
  Chip,
  Icon,
  IconButton,
  Input,
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
  SlidersIcon,
} from "@nimbus-ds/icons";

const PageTemplateExamplePage: React.FC = () => {
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
            <Button><Icon color="currentColor" source={<SlidersIcon />} /></Button>
          </Box>
          <Box display="flex" gap="2" alignItems="center">
            <Text>150 ventas</Text>
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
            <Text>Reemplazame con tu contenido</Text>
          </Box>
        </Layout>
      </Page.Body>
    </Page>
  );
}

export default PageTemplateExamplePage;
