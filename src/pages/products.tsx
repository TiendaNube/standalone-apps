import { useEffect, useState } from "react";

import Head from "next/head";

import { Page } from "@nimbus-ds/page";
import { Layout } from "@nimbus-ds/layout";
import { Box, Chip, IconButton, Table, Thumbnail } from "@nimbus-ds/components";
import { DataTable } from "@nimbus-ds/data-table";
import { GetServerSideProps, NextPage } from "next";
import { generateProducts, ProductProps } from "@/lib";
import { ExternalLinkIcon, TrashIcon } from "@nimbus-ds/icons";

interface ProductsProps {
  products: ProductProps[];
}

const Products: NextPage<ProductsProps> = ({ products }: ProductsProps) => {
  const [rows, setRows] = useState<ProductProps[]>(products);
  const [checkedRows, setCheckedRows] = useState<number[]>([]);
  const [headerCheckboxStatus, setHeaderCheckboxStatus] = useState(false);
  const [headerIndeterminateStatus, setHeaderIndeterminateStatus] =
    useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [sortDirection, setSortDirection] = useState<
    "ascending" | "descending"
  >("descending");
  const [sortColumn, setSortColumn] = useState<"id" | "name">("id");

  useEffect(() => {
    if (checkedRows.length === rows.length) {
      setHeaderCheckboxStatus(true);
      setHeaderIndeterminateStatus(false);
    } else if (checkedRows.length > 0) {
      setHeaderCheckboxStatus(false);
      setHeaderIndeterminateStatus(true);
    } else {
      setHeaderCheckboxStatus(false);
      setHeaderIndeterminateStatus(false);
    }
  }, [checkedRows.length, rows.length]);

  const handleRowClick = (id: number) => {
    if (checkedRows.includes(id)) {
      setCheckedRows(checkedRows.filter((rowId) => rowId !== id));
    } else {
      setCheckedRows([...checkedRows, id]);
    }
  };

  const handleHeaderCheckboxClick = () => {
    if (headerCheckboxStatus) {
      setCheckedRows([]);
    } else {
      const rowIds = rows.map((row) => row.id);
      setCheckedRows(rowIds);
    }
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const handleSort = (column: "id" | "name") => {
    if (column === sortColumn) {
      setSortDirection(
        sortDirection === "ascending" ? "descending" : "ascending"
      );
    } else {
      setSortColumn(column);
      setSortDirection("ascending");
    }
  };

  const sortCompareFunction = (rowA: ProductProps, rowB: ProductProps) => {
    if (sortColumn === "id") {
      return sortDirection === "ascending"
        ? rowA.id - rowB.id
        : rowB.id - rowA.id;
    }
    if (sortColumn === "name") {
      return sortDirection === "ascending"
        ? rowA.name.localeCompare(rowB.name)
        : rowB.name.localeCompare(rowA.name);
    }
    return 0;
  };

  const getDisplayedRows = (): ProductProps[] => {
    const sortedRows = rows.slice().sort(sortCompareFunction);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortedRows.slice(startIndex, endIndex);
  };

  const displayedRows = getDisplayedRows();
  const totalRows = rows.length;
  const firstRow = (currentPage - 1) * pageSize + 1;
  const lastRow = Math.min(currentPage * pageSize, totalRows);

  const tableHeader = (
    <DataTable.Header
      checkbox={{
        name: "check-all-rows",
        checked: headerCheckboxStatus,
        onClick: handleHeaderCheckboxClick,
        indeterminate: headerIndeterminateStatus,
      }}
    >
      {/* <Table.Cell width="120px">
        <Box display="flex" gap="2" alignItems="center">
          Order no.
          <IconButton
            source={
              sortDirection === "ascending" ? (
                <ChevronUpIcon size={10} />
              ) : (
                <ChevronDownIcon size={10} />
              )
            }
            size="1rem"
            onClick={() => handleSort("id")}
          />
        </Box>
      </Table.Cell> */}
      <Table.Cell width="auto">Producto</Table.Cell>
      <Table.Cell width="120px">Stock</Table.Cell>
      <Table.Cell width="120px">Precio</Table.Cell>
      <Table.Cell width="120px">Variantes</Table.Cell>
      <Table.Cell width="120px">Acciones</Table.Cell>
    </DataTable.Header>
  );

  const tableFooter = (
    <DataTable.Footer
      itemCount={`Mostrando ${firstRow}-${lastRow} productos de ${totalRows}`}
      pagination={{
        pageCount: Math.ceil(totalRows / pageSize),
        activePage: currentPage,
        onPageChange: handlePageChange,
      }}
    />
  );

  const hasBulkActions = checkedRows.length > 0 && (
    <DataTable.BulkActions
      checkbox={{
        name: "check-all",
        checked: headerCheckboxStatus,
        onClick: handleHeaderCheckboxClick,
        indeterminate: headerIndeterminateStatus,
      }}
      label={`${checkedRows.length} ${
        checkedRows.length === 1 ? "seleccionado" : "seleccionados"
      }`}
      action={
        <Box display="flex" gap="1">
          <Chip text="Eliminar" />
        </Box>
      }
    />
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
        <Page.Header title="Productos de mi tienda" />
        <Page.Body>
          <Layout columns="1">
            <Layout.Section>
              <DataTable
                header={tableHeader}
                footer={tableFooter}
                bulkActions={hasBulkActions}
              >
                {displayedRows.map((row) => {
                  const { id } = row;

                  return (
                    <DataTable.Row
                      key={id}
                      onClick={() => handleRowClick(id)}
                      backgroundColor={
                        checkedRows.includes(id)
                          ? {
                              rest: "primary-surface",
                              hover: "primary-surfaceHighlight",
                            }
                          : {
                              rest: "neutral-background",
                              hover: "neutral-surface",
                            }
                      }
                      checkbox={{
                        name: `check-${id}`,
                        checked: checkedRows.includes(id),
                        onClick: () => handleRowClick(id),
                      }}
                    >
                      <Table.Cell>
                        <Box display="flex" gap="2">
                          <Thumbnail
                            src={row.image}
                            width="36px"
                            alt={row.name}
                          />
                          {row.name}
                        </Box>
                      </Table.Cell>
                      <Table.Cell>{row.stock}</Table.Cell>
                      <Table.Cell>{row.price}</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>
                        <Box display="flex" gap="2">
                          <IconButton source={<TrashIcon />} size="2rem" />
                          <IconButton
                            source={<ExternalLinkIcon />}
                            size="2rem"
                          />
                        </Box>
                      </Table.Cell>
                    </DataTable.Row>
                  );
                })}
              </DataTable>
            </Layout.Section>
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = generateProducts(30);

  return {
    props: {
      products,
    },
  };
};

export default Products;
