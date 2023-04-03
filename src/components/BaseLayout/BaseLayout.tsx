import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@nimbus-ds/styles";

import "@nimbus-ds/styles/dist/index.css";
import "@nimbus-ds/styles/dist/themes/dark.css";

import { routes } from "@/lib";
import { useDarkMode } from "@/components";

import AppShell from "@nimbus-ds/app-shell";
import {
  Link,
  Icon,
  Box,
  Button,
  Text,
  IconButton,
  Thumbnail,
} from "@nimbus-ds/components";
import {
  CogIcon,
  ExternalLinkIcon,
  MoonIcon,
  QuestionCircleIcon,
  SunIcon,
} from "@nimbus-ds/icons";
import Menu from "@nimbus-ds/menu";
import NextLink from "next/link";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const handleActive = (href: string) => router.asPath === href;

  const { darkMode, toggleDarkMode } = useDarkMode();
  const currentTheme = darkMode ? "dark" : "base";
  const currentThemeIcon = darkMode ? <SunIcon /> : <MoonIcon />;

  const [active, setActive] = useState(currentTheme === "dark");

  useEffect(() => {
    document.body.className = currentTheme;
    setActive(currentTheme === "dark");
  }, [currentTheme, active]);

  const appMenu = (
    <Menu>
      <Menu.Header>
        <Box display="flex" gap="2" alignItems="center">
          <Thumbnail width="40px" alt="App logo" />
          <Box display="flex" flexDirection="column">
            <Text>Demo app</Text>
            <Link appearance="primary" textDecoration="none">
              tiendademo.com
              <Icon color="currentColor" source={<ExternalLinkIcon />} />
            </Link>
          </Box>
        </Box>
      </Menu.Header>
      <Menu.Body>
        <Menu.Section>
          {routes?.appRoutes.map((route) => (
            <NextLink href={route.slug} key={route.slug}>
              <Menu.Button
                startIcon={route.icon}
                active={handleActive(route.slug)}
                label={route.title}
              />
            </NextLink>
          ))}
        </Menu.Section>
      </Menu.Body>
      <Menu.Footer label="Configuración" startIcon={CogIcon} />
    </Menu>
  );

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

  return (
    <ThemeProvider theme={currentTheme}>
      <AppShell menu={appMenu}>
        <AppShell.Header
          leftSlot={<Text color="neutral-surface">{currentTheme}</Text>}
          rightSlot={rightStack}
        />
        {children}
      </AppShell>
    </ThemeProvider>
  );
};

export default BaseLayout;
