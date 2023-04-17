import React, { useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";

import { ThemeProvider } from "@nimbus-ds/styles";

import { routes } from "../../lib";
import { useDarkMode, ResponsiveComponent, AppMenu } from "../";
import { handleActive, isExample } from "../../utils";

import { AppShell, NavTabs } from "@nimbus-ds/patterns";
import {
  Link,
  Icon,
  Box,
  Button,
  Text,
  IconButton,
  Sidebar,
} from "@nimbus-ds/components";
import {
  ChevronLeftIcon,
  MenuIcon,
  MoonIcon,
  QuestionCircleIcon,
  SunIcon,
} from "@nimbus-ds/icons";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const currentTheme = darkMode ? "dark" : "base";
  const currentThemeIcon = darkMode ? <SunIcon /> : <MoonIcon />;
  const router = useLocation();

  const [active, setActive] = useState(currentTheme === "dark");

  const [openMenu, setOpenMenu] = useState(false);

  const convertIconTypeToReactNode = (IconComponent: any): React.ReactNode => {
    return <IconComponent size="medium" />;
  };

  useEffect(() => {
    document.body.className = currentTheme;
    setActive(currentTheme === "dark");
  }, [currentTheme, active]);

  const handleOpenMobileMenu = () => setOpenMenu(!openMenu);

  const rightStack = (
    <>
      <Button appearance="transparent">
        <Icon color="currentColor" source={<QuestionCircleIcon />} />
        Ayuda para desarrolladores
      </Button>
      <IconButton
        source={currentThemeIcon}
        onClick={toggleDarkMode}
        size="2rem"
      />
    </>
  );

  const mobileContent = (
    <Box pb="16">
      {children}
      <NavTabs>
        {routes?.appRoutes.map((route) => (
          <RouterLink to={route.slug} key={route.slug}>
            <NavTabs.Item
              icon={convertIconTypeToReactNode(route.icon)}
              active={handleActive(route.slug, router.pathname)}
              onClick={() => {}}
            />
          </RouterLink>
        ))}
        <NavTabs.Item
          icon={<MenuIcon size="medium" />}
          onClick={handleOpenMobileMenu}
        />
      </NavTabs>
      <Sidebar maxWidth="280px" open={openMenu}>
        <AppMenu />
      </Sidebar>
    </Box>
  );

  const desktopContent = (
    <AppShell menu={<AppMenu />}>
      <AppShell.Header
        leftSlot={
          isExample(router.pathname) ? (
            <Button as={RouterLink} to="/examples" appearance="transparent">
              <Icon source={<ChevronLeftIcon />} color="currentColor" />
              Volver
            </Button>
          ) : (
            <Text color="neutral-surface">{currentTheme}</Text>
          )
        }
        rightSlot={rightStack}
      />
      {children}
    </AppShell>
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <ResponsiveComponent
        mobileContent={mobileContent}
        desktopContent={desktopContent}
      />
    </ThemeProvider>
  );
};

export default BaseLayout;
