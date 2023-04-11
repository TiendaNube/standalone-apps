import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@nimbus-ds/styles";

import "@nimbus-ds/styles/dist/index.css";
import "@nimbus-ds/styles/dist/themes/dark.css";

import { routes } from "@/lib";
import { useDarkMode, ResponsiveComponent } from "@/components";

import { AppShell, NavTabs, Menu } from "@nimbus-ds/patterns";
import {
  Link,
  Icon,
  Box,
  Button,
  Text,
  IconButton,
  Thumbnail,
  Sidebar,
} from "@nimbus-ds/components";
import {
  ChevronLeftIcon,
  CogIcon,
  ExternalLinkIcon,
  MenuIcon,
  MoonIcon,
  QuestionCircleIcon,
  SunIcon,
} from "@nimbus-ds/icons";
import NextLink from "next/link";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const handleActive = (href: string) => router.asPath === href;
  const handleExamples = (href: string) =>
    handleActive(href) || router.pathname.startsWith("/examples");

  const isExample = router.pathname.startsWith("/examples/");

  const { darkMode, toggleDarkMode } = useDarkMode();
  const currentTheme = darkMode ? "dark" : "base";
  const currentThemeIcon = darkMode ? <SunIcon /> : <MoonIcon />;

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
          {routes?.appRoutes.map((route) =>
            route.title !== "Galería de ejemplos" ? (
              <Menu.Button
                as={NextLink}
                href={route.slug}
                key={route.slug}
                startIcon={route.icon}
                active={handleActive(route.slug)}
                label={route.title}
              />
            ) : (
              <Box
                backgroundColor={
                  handleExamples(route.slug)
                    ? "primary-surface"
                    : "neutral-background"
                }
                borderRadius=".5rem"
                key={route.slug}
              >
                <Menu.Button
                  as={NextLink}
                  href={route.slug}
                  key={route.slug}
                  label={route.title}
                  startIcon={route.icon}
                  active={handleExamples(route.slug)}
                  id="control-examples-accordion"
                  aria-expanded={handleExamples(route.slug)}
                  aria-controls="content-examples-accordion"
                />
                {handleExamples(route.slug) && (
                  <Box
                    id="content-examples-accordion"
                    aria-hidden={!handleExamples(route.slug)}
                    height={handleExamples(route.slug) ? "auto" : "0"}
                    overflow="hidden"
                    pl="6"
                    pt="1"
                    pb="1"
                    pr="1"
                  >
                    {routes?.exampleRoutes.map((subroute) => (
                      <Menu.Button
                        as={NextLink}
                        href={subroute.slug}
                        key={subroute.slug}
                        label={subroute.title}
                        active={handleActive(subroute.slug)}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            )
          )}
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

  const mobileContent = (
    <>
      {children}
      <NavTabs>
        {routes?.appRoutes.map((route) => (
          <NextLink href={route.slug} key={route.slug}>
            <NavTabs.Item
              icon={convertIconTypeToReactNode(route.icon)}
              active={handleActive(route.slug)}
              onClick={() => {}}
            />
          </NextLink>
        ))}
        <NavTabs.Item
          icon={<MenuIcon size="medium" />}
          onClick={handleOpenMobileMenu}
        />
      </NavTabs>
      <Sidebar maxWidth="280px" open={openMenu}>
        {appMenu}
      </Sidebar>
    </>
  );

  const desktopContent = (
    <AppShell menu={appMenu}>
      <AppShell.Header
        leftSlot={
          isExample ? (
            <Button as={NextLink} href="/examples" appearance="transparent">
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
