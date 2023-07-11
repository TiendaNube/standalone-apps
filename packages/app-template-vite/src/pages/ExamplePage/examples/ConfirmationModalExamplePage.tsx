import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation('examples');

  const handleOpenModal = () => setOpenModal(!openModal);

  const popoverContent = (
    <Box display="flex" flexDirection="column" width="100%">
      <MenuButton label={t('modal-confirmation.secondary-action')} />
      <MenuButton label={t('modal-confirmation.secondary-action')} />
      <MenuButton label={t('modal-confirmation.secondary-action')} />
    </Box>
  );

  const buttonStack = (
    <>
      <IconButton source={<ChevronLeftIcon />} size="2rem" />
      <IconButton source={<ChevronRightIcon />} size="2rem" />
      <Popover content={popoverContent} arrow={false} padding="small">
        <Button>
        {t('modal-confirmation.context-menu')}
          <Icon source={<ChevronDownIcon />} />
        </Button>
      </Popover>
      <Button>
      {t('modal-confirmation.secondary-action')}
        <Icon source={<DownloadIcon />} />
      </Button>
      <Button appearance="primary">
        <Icon color="neutral-background" source={<PlusCircleIcon />} />
        {t('modal-confirmation.primary-action')}
      </Button>
    </>
  );

  return (
    <>
      <Page maxWidth="1200px">
        <Page.Header
          title={t('modal-confirmation.title')}
          subtitle={t('modal-confirmation.subtitle')}
          buttonStack={buttonStack}
        >
          <Box display="flex" gap="2">
            <Tag appearance="primary">{t('modal-confirmation.tag')}</Tag>
            <Tag>{t('modal-confirmation.tag')}</Tag>
          </Box>
          <Alert title="Alerta de exemplo">
          {t('modal-confirmation.message')}
          </Alert>
          <Box display="flex" flexDirection="column" gap="2">
            <Box display="flex" gap="1">
              <Input.Search placeholder={t('modal-confirmation.search')} />
              <Button><Icon color="currentColor" source={<SearchIcon />} /></Button>
            </Box>
            <Box display="flex" gap="2" alignItems="center">
              <Text>{t('modal-confirmation.filter-text')}</Text>
              <Chip text={t('modal-confirmation.filter-chip')} removable />
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
              <Button appearance="danger" onClick={handleOpenModal}>{t('modal-confirmation.open-button')}</Button>
            </Box>
          </Layout>
        </Page.Body>
      </Page>
      <Modal open={openModal} onDismiss={handleOpenModal}>
        <Modal.Header title={t('modal-confirmation.modal.title')} />
        <Modal.Body padding="none">
          <Text>{t('modal-confirmation.modal.confirmation')}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOpenModal}>{t('modal-confirmation.modal.cancel')}</Button>
          <Button appearance="danger">{t('modal-confirmation.modal.remove')}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModalExamplePage;
