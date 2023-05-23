import React, { useState } from "react";

import { ResponsiveComponent } from "../../../components";

import { Page, Layout, DataTable, DataList } from "@nimbus-ds/patterns";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Icon,
  IconButton,
  Input,
  Link,
  Table,
  Tag,
  Text,
  Thumbnail,
} from "@nimbus-ds/components";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  EllipsisIcon,
  EyeOffIcon,
  PlusCircleIcon,
  SlidersIcon,
} from "@nimbus-ds/icons";

const ProductListExamplePage: React.FC = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const buttonStack = (
    <>
      <IconButton source={<ChevronLeftIcon />} size="2rem" />
      <IconButton source={<ChevronRightIcon />} size="2rem" />
      <Button>
        Mis aplicaciones
        <Icon source={<ChevronDownIcon />} />
      </Button>
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

  const tableHeader = (
    <DataTable.Header
      checkbox={{
        name: "check-all-rows",
        checked: false,
      }}
    >
      <Table.Cell width="auto">Producto</Table.Cell>
      <Table.Cell width="88px">Stock</Table.Cell>
      <Table.Cell width="88px">Precio</Table.Cell>
      <Table.Cell width="88px">Promocional</Table.Cell>
      <Table.Cell width="150px">Variantes</Table.Cell>
      <Table.Cell width="80px">Acciones</Table.Cell>
    </DataTable.Header>
  );

  const tableFooter = (
    <DataTable.Footer
      itemCount="Mostrando 1-20 productos de 40"
      pagination={{
        pageCount: 2,
        activePage: 1,
        onPageChange: () => {},
      }}
    />
  );

  const mobileContent = (
    <>
      <Box px="4">
        <Link as="button" onClick={handleEditMode}>
          {editMode ? "Cancelar" : "Editar"}
        </Link>
      </Box>
      <DataList>
        {Array.from({ length: 20 }, (_, index) => (
          <DataList.Row key={index} flexDirection="row" gap="2">
            {editMode && <Checkbox name={`check-${index}`} checked={false} />}
            <Thumbnail
              aspectRatio="1/1"
              width="64px"
              alt="Nombre del producto"
            />
            <Box display="flex" flexDirection="column" gap="1">
              <Text color="primary-interactive">Nombre del producto</Text>
              <Tag appearance="warning">
                <Icon source={<EyeOffIcon />} color="currentColor" />
                Estado
              </Tag>
              <Text>Stock</Text>
            </Box>
          </DataList.Row>
        ))}
      </DataList>
    </>
  );

  const desktopContent = (
    <DataTable header={tableHeader} footer={tableFooter}>
      {Array.from({ length: 20 }, (_, index) => (
        <DataTable.Row
          key={index}
          backgroundColor={{
            rest: "neutral-background",
            hover: "neutral-surface",
          }}
          checkbox={{
            name: `check-${index}`,
            checked: false,
          }}
        >
          <Table.Cell>
            <Box display="flex" gap="2">
              <Thumbnail
                aspectRatio="1/1"
                width="64px"
                alt="Nombre del producto"
              />
              <Box display="flex" flexDirection="column" gap="1">
                <Text color="primary-interactive">Nombre del producto</Text>
                <Tag appearance="warning">Tag de producto</Tag>
              </Box>
            </Box>
          </Table.Cell>
          <Table.Cell>
            <Input placeholder="0" type="number" />
          </Table.Cell>
          <Table.Cell>
            <Input placeholder="0" type="number" append="R$" />
          </Table.Cell>
          <Table.Cell>
            <Input placeholder="0" type="number" append="R$" />
          </Table.Cell>
          <Table.Cell>
            <Text>Variante 1 / Variante 2 / Variante 3 / Variante 4</Text>
          </Table.Cell>
          <Table.Cell>
            <Box display="flex" gap="2">
              <IconButton source={<EllipsisIcon />} size="2rem" />
              <IconButton source={<EllipsisIcon />} size="2rem" />
            </Box>
          </Table.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );

  return (
    <Page maxWidth="1200px">
      <Page.Header title="Listado de productos" buttonStack={buttonStack}>
        <Box display="flex" flexDirection="column" gap="2">
          <Box display="flex" gap="1">
            <Input.Search placeholder="Buscar" />
            <Button>
              <Icon color="currentColor" source={<SlidersIcon />} />
            </Button>
          </Box>
          <Box display="flex" gap="2" alignItems="center">
            <Text>150 productos</Text>
            <Chip text="Filtro aplicado" removable />
          </Box>
        </Box>
      </Page.Header>
      <Page.Body px={{ xs: "none", md: "6" }}>
        <Layout columns="1">
          <ResponsiveComponent
            desktopContent={desktopContent}
            mobileContent={mobileContent}
          />
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default ProductListExamplePage;
