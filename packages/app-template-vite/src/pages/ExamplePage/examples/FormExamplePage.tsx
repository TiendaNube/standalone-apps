import React from "react";

import { Page, Layout, FormField, InteractiveList } from "@nimbus-ds/patterns";
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
import {
  DragIcon,
  EditIcon,
  ExternalLinkIcon,
  InfoCircleIcon,
  PictureIcon,
} from "@nimbus-ds/icons";

const FormExamplePage: React.FC = () => {
  return (
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
                    label="Label para um input simples"
                    placeholder="Ejemplo: Nome de um produto"
                  />
                  <FormField.Textarea
                    id="multiline-input"
                    label="Label para um input de texto multilinha"
                    lines={5}
                  />
                </Box>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header title="Inputs para carregar de arquivos" />
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
                        placeholder="Texto de ajuda"
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
                        placeholder="Texto de ajuda"
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
                        placeholder="Texto de ajuda"
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
                        placeholder="Texto de ajuda"
                        aspectRatio="16/9"
                      />
                    </Box>
                  </Box>
                  <Box display="flex" gap="2" flexWrap="wrap">
                    <Tag>
                      <Icon source={<DragIcon />} color="currentColor" />
                      Especificações do arquivo
                    </Tag>
                    <Tag>
                      <Icon source={<PictureIcon />} color="currentColor" />
                      Especificações do arquivo
                    </Tag>
                  </Box>
                </Box>
              </Card.Body>
              <Card.Footer>
                <Link appearance="primary" textDecoration="none">
                  <Icon source={<ExternalLinkIcon />} color="currentColor" />
                  Link primário
                </Link>
                <Link appearance="primary" textDecoration="none">
                  <Icon source={<ExternalLinkIcon />} color="currentColor" />
                  Link secundário
                </Link>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header title="Input de URL" />
              <Card.Body>
                <FormField.Input
                  label="Label para um input de URL"
                  placeholder="Placeholder"
                  append={<Text color="neutral-textDisabled">https://</Text>}
                  appendPosition="start"
                />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header title="Inputs de preço" />
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="4">
                  <Box display="grid" gridTemplateColumns="1fr 1fr" gap="4">
                    <FormField.Input
                      label="Preço"
                      placeholder="Placeholder"
                      append={<Text color="neutral-textDisabled">R$</Text>}
                      appendPosition="start"
                    />
                    <FormField.Input
                      label="Preço promocional"
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
                  <Title as="h3">Inputs de estoque</Title>
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
                      radio={{ name: "estoque" }}
                    />
                    <InteractiveList.RadioItem
                      title="Limitado"
                      radio={{ name: "estoque" }}
                    />
                  </InteractiveList>
                </Box>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header title="Inputs de peso e dimensões" />
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
                      label="Comprimento"
                      placeholder="Placeholder"
                      append={<Text color="neutral-textDisabled">cm</Text>}
                      appendPosition="end"
                    />
                    <FormField.Input
                      label="Largura"
                      placeholder="Placeholder"
                      append={<Text color="neutral-textDisabled">cm</Text>}
                      appendPosition="end"
                    />
                    <FormField.Input
                      label="Altura"
                      placeholder="Placeholder"
                      append={<Text color="neutral-textDisabled">cm</Text>}
                      appendPosition="end"
                    />
                  </Box>
                </Box>
              </Card.Body>
              <Card.Footer>
                <Link>
                  Link externo de ajuda
                  <Icon source={<ExternalLinkIcon />} color="currentColor" />
                </Link>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header title="Múltiplas escolhas" />
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="4">
                  <Box display="grid" gridTemplateColumns="1fr 1fr" gap="4">
                    <FormField.Select
                      label="Múltipla escolha 1"
                      id="select-1"
                      name="select-1"
                    >
                      <Select.Option label="Opção 1" value="opcion-1" />
                      <Select.Option label="Opção 2" value="opcion-2" />
                      <Select.Option label="Opção 3" value="opcion-3" />
                      <Select.Option label="Opção 4" value="opcion-4" />
                    </FormField.Select>
                    <FormField.Select
                      label="Múltipla escolha 2"
                      id="select-2"
                      name="select-2"
                    >
                      <Select.Option label="Opção 1" value="opcion-1" />
                      <Select.Option label="Opção 2" value="opcion-2" />
                      <Select.Option label="Opção 3" value="opcion-3" />
                      <Select.Option label="Opção 4" value="opcion-4" />
                    </FormField.Select>
                  </Box>
                </Box>
              </Card.Body>
              <Card.Footer>
                <Link>
                  Link externo de ajuda
                  <Icon source={<ExternalLinkIcon />} color="currentColor" />
                </Link>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Header title="Categorias" />
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="4">
                  <Chip removable text="Categoria 1" />
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
                label="Opções gerais 1"
                id="general-checkbox-1"
                name="general-checkbox-1"
              />
              <Checkbox
                label="Opções gerais 2"
                id="general-checkbox-2"
                name="general-checkbox-2"
              />
            </Box>
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

export default FormExamplePage;
