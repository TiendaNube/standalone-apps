import Head from "next/head";

import { Page } from "@nimbus-ds/page";
import { Layout } from "@nimbus-ds/layout";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  FileUploader,
  Icon,
  Input,
  Label,
  Link,
  Select,
  Tag,
  Text,
  Title,
  Tooltip,
} from "@nimbus-ds/components";
import FormField from "@nimbus-ds/formfield";
import {
  DragIcon,
  EditIcon,
  ExternalLinkIcon,
  InfoCircleIcon,
  PictureIcon,
} from "@nimbus-ds/icons";
import InteractiveList from "@nimbus-ds/interactive-list";

export default function FormExample() {
  return (
    <>
      <Head>
        <title>Nimbus app template</title>
        <meta name="description" content="Nimbus app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page maxWidth="800px">
        <Page.Header title="Formulario" />
        <Page.Body>
          <Layout columns="1">
            <Layout.Section>
              <Card>
                <Card.Header title="Inputs de texto" />
                <Card.Body>
                  <Box display="flex" flexDirection="column" gap="4">
                    <FormField.Input
                      label="Label para un input simple"
                      placeholder="Ejemplo: Nombre de un producto"
                    />
                    <FormField.Textarea
                      id="multiline-input"
                      label="Label para un input de texto multilínea"
                      lines={5}
                    />
                  </Box>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header title="Inputs para carga de archivos" />
                <Card.Body>
                  <Box display="flex" flexDirection="column" gap="4">
                    <Box display="flex" flexWrap="wrap" gap="4">
                      <Box
                        display="inline-flex"
                        flex={{
                          xs: "1 1 calc(50% - 8px)",
                          md: "1 1 calc(25% - 16px)",
                        }}
                      >
                        <FileUploader
                          placeholder="Texto de ayuda"
                          aspectRatio="16/9"
                        />
                      </Box>
                      <Box
                        display="inline-flex"
                        flex={{
                          xs: "1 1 calc(50% - 8px)",
                          md: "1 1 calc(25% - 16px)",
                        }}
                      >
                        <FileUploader
                          placeholder="Texto de ayuda"
                          aspectRatio="16/9"
                        />
                      </Box>
                      <Box
                        display="inline-flex"
                        flex={{
                          xs: "1 1 calc(50% - 8px)",
                          md: "1 1 calc(25% - 16px)",
                        }}
                      >
                        <FileUploader
                          placeholder="Texto de ayuda"
                          aspectRatio="16/9"
                        />
                      </Box>
                      <Box
                        display="inline-flex"
                        flex={{
                          xs: "1 1 calc(50% - 8px)",
                          md: "1 1 calc(25% - 16px)",
                        }}
                      >
                        <FileUploader
                          placeholder="Texto de ayuda"
                          aspectRatio="16/9"
                        />
                      </Box>
                    </Box>
                    <Box display="flex" gap="2" flexWrap="wrap">
                      <Tag>
                        <Icon source={<DragIcon />} color="currentColor" />
                        Especificaciones del archivo
                      </Tag>
                      <Tag>
                        <Icon source={<PictureIcon />} color="currentColor" />
                        Especificaciones del archivo
                      </Tag>
                    </Box>
                  </Box>
                </Card.Body>
                <Card.Footer>
                  <Link appearance="primary" textDecoration="none">
                    <Icon source={<ExternalLinkIcon />} color="currentColor" />
                    Link primario
                  </Link>
                  <Link appearance="primary" textDecoration="none">
                    <Icon source={<ExternalLinkIcon />} color="currentColor" />
                    Link secundario
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Header title="Input de URL" />
                <Card.Body>
                  <FormField.Input
                    label="Label para un input de URL"
                    placeholder="Placeholder"
                    append={<Text color="neutral-textDisabled">https://</Text>}
                    appendPosition="start"
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header title="Inputs de precio" />
                <Card.Body>
                  <Box display="flex" flexDirection="column" gap="4">
                    <Box display="grid" gridTemplateColumns="1fr 1fr" gap="4">
                      <FormField.Input
                        label="Precio"
                        placeholder="Placeholder"
                        append={<Text color="neutral-textDisabled">R$</Text>}
                        appendPosition="start"
                      />
                      <FormField.Input
                        label="Precio promocional"
                        placeholder="Placeholder"
                        append={<Text color="neutral-textDisabled">R$</Text>}
                        appendPosition="start"
                      />
                    </Box>
                    <Checkbox name="opcional" label="Checkbox opcional" />
                  </Box>
                </Card.Body>
              </Card>
              <Card padding="none">
                <Card.Header>
                  <Box px="4" pt="4">
                    <Title as="h3">Inputs de stock</Title>
                  </Box>
                </Card.Header>
                <Card.Body>
                  <Box display="flex" flexDirection="column" gap="4">
                    <Box
                      display="grid"
                      gridTemplateColumns="1fr 1fr"
                      gap="4"
                      px="4"
                    >
                      <Box display="flex" flexDirection="column" gap="2">
                        <Label htmlFor="barcode">
                          Código de barra
                          <Tooltip content="Tooltip con información opcional">
                            <Icon
                              source={<InfoCircleIcon size={12} />}
                              color="primary-interactive"
                            />
                          </Tooltip>
                        </Label>
                        <Input id="barcode" />
                      </Box>
                      <Box display="flex" flexDirection="column" gap="2">
                        <Label htmlFor="sku">
                          SKU
                          <Tooltip content="Tooltip con información opcional">
                            <Icon
                              source={<InfoCircleIcon size={12} />}
                              color="primary-interactive"
                            />
                          </Tooltip>
                        </Label>
                        <Input id="sku" />
                      </Box>
                    </Box>
                    <InteractiveList>
                      <InteractiveList.RadioItem
                        title="Ilimitado"
                        radio={{ name: "stock" }}
                      />
                      <InteractiveList.RadioItem
                        title="Limitado"
                        radio={{ name: "stock" }}
                      />
                    </InteractiveList>
                  </Box>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header title="Inputs de peso y dimensiones" />
                <Card.Body>
                  <Box display="flex" flexDirection="column" gap="4">
                    <Box
                      display="grid"
                      gridTemplateColumns={{
                        xs: "1fr 1fr",
                        md: "1fr 1fr 1fr 1fr",
                      }}
                      gap="4"
                    >
                      <FormField.Input
                        label="Peso"
                        placeholder="Placeholder"
                        append={<Text color="neutral-textDisabled">kg</Text>}
                        appendPosition="end"
                      />
                      <FormField.Input
                        label="Largo"
                        placeholder="Placeholder"
                        append={<Text color="neutral-textDisabled">cm</Text>}
                        appendPosition="end"
                      />
                      <FormField.Input
                        label="Ancho"
                        placeholder="Placeholder"
                        append={<Text color="neutral-textDisabled">cm</Text>}
                        appendPosition="end"
                      />
                      <FormField.Input
                        label="Alto"
                        placeholder="Placeholder"
                        append={<Text color="neutral-textDisabled">cm</Text>}
                        appendPosition="end"
                      />
                    </Box>
                  </Box>
                </Card.Body>
                <Card.Footer>
                  <Link>
                    Link externo de ayuda
                    <Icon source={<ExternalLinkIcon />} color="currentColor" />
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Header title="Opciones múltiples" />
                <Card.Body>
                  <Box display="flex" flexDirection="column" gap="4">
                    <Box display="grid" gridTemplateColumns="1fr 1fr" gap="4">
                      <FormField.Select
                        label="Opción múltiple 1"
                        id="select-1"
                        name="select-1"
                      >
                        <Select.Option label="Opción 1" value="opcion-1" />
                        <Select.Option label="Opción 2" value="opcion-2" />
                        <Select.Option label="Opción 3" value="opcion-3" />
                        <Select.Option label="Opción 4" value="opcion-4" />
                      </FormField.Select>
                      <FormField.Select
                        label="Opción múltiple 2"
                        id="select-2"
                        name="select-2"
                      >
                        <Select.Option label="Opción 1" value="opcion-1" />
                        <Select.Option label="Opción 2" value="opcion-2" />
                        <Select.Option label="Opción 3" value="opcion-3" />
                        <Select.Option label="Opción 4" value="opcion-4" />
                      </FormField.Select>
                    </Box>
                  </Box>
                </Card.Body>
                <Card.Footer>
                  <Link>
                    Link externo de ayuda
                    <Icon source={<ExternalLinkIcon />} color="currentColor" />
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Header title="Categorías" />
                <Card.Body>
                  <Box display="flex" flexDirection="column" gap="4">
                    <Chip removable text="Categoría 1" />
                  </Box>
                </Card.Body>
                <Card.Footer>
                  <Link appearance="primary" textDecoration="none">
                    <Icon source={<EditIcon />} color="currentColor" />
                    Editar
                  </Link>
                </Card.Footer>
              </Card>
              <Box display="flex" flexDirection="column" gap="2">
                <Checkbox
                  label="Opción general 1"
                  id="general-checkbox-1"
                  name="general-checkbox-1"
                />
                <Checkbox
                  label="Opción general 2"
                  id="general-checkbox-2"
                  name="general-checkbox-2"
                />
              </Box>
              <Box display="flex" justifyContent="flex-end" gap="2">
                <Button>Cancelar</Button>
                <Button appearance="primary">Guardar</Button>
              </Box>
            </Layout.Section>
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
}
