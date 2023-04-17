import { useState } from "react";

import Head from "next/head";

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
} from "@nimbus-ds/components";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  EllipsisIcon,
  PlusCircleIcon,
  SlidersIcon,
} from "@nimbus-ds/icons";
import { ResponsiveComponent } from "@/components";

export default function SimpleListExample() {
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
      <Table.Cell width="auto">Dato principal</Table.Cell>
      <Table.Cell width="150px">Dato 1</Table.Cell>
      <Table.Cell width="150px">Dato 2</Table.Cell>
      <Table.Cell width="150px">Dato 3</Table.Cell>
      <Table.Cell width="150px">Estado</Table.Cell>
      <Table.Cell width="80px">Acciones</Table.Cell>
    </DataTable.Header>
  );

  const tableFooter = (
    <DataTable.Footer
      itemCount="Mostrando 1-20 elementos de 40"
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
        <Link as="button" onClick={handleEditMode}>{editMode ? "Cancelar" : "Editar"}</Link>
      </Box>
      <DataList>
        {Array.from({ length: 20 }, (_, index) => (
          <DataList.Row
            key={index}
            flexDirection="row"
            gap="2"
          >
            {editMode && (
              <Checkbox
                name={`check-${index}`}
                checked={false}
              />
            )}
            <Box display="flex" flexDirection="column" flex="1 1 auto">
              <Box display="flex" justifyContent="space-between" mb="2">
                <Text color="primary-interactive">Nombre del dato principal</Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text>Nombre del dato 1</Text>
                <Text>Nombre del dato 2</Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text>Nombre del dato 3</Text>
                <Text>Nombre del dato 4</Text>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mt="2">
                <Tag>Nombre del estado</Tag>
                <IconButton
                  source={<EllipsisIcon />}
                  size="2rem"
                />
              </Box>
            </Box>
          </DataList.Row>
        ))}
      </DataList>
    </>
  );

  const desktopContent = (
    <DataTable
      header={tableHeader}
      footer={tableFooter}
    >
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
            <Text color="primary-interactive">Nombre del dato principal</Text>
          </Table.Cell>
          <Table.Cell>Nombre del dato 1</Table.Cell>
          <Table.Cell>Nombre del dato 2</Table.Cell>
          <Table.Cell>Nombre del dato 3</Table.Cell>
          <Table.Cell>
            <Tag>Nombre del estado</Tag>
          </Table.Cell>
          <Table.Cell>
            <IconButton
              source={<EllipsisIcon />}
              size="2rem"
            />
          </Table.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
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
          title="Listado simple"
          buttonStack={buttonStack}
        >
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
        <Page.Body px={{ xs: "none", md: "6" }}>
          <Layout columns="1">
            <ResponsiveComponent
              desktopContent={desktopContent}
              mobileContent={mobileContent}
            />
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
}
