import {
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from "react";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { BaseLayout } from "@/components";

interface IDarkModeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<IDarkModeContext>(null as any);

export const useDarkMode = () => useContext(DarkModeContext);

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = useCallback(
    () => setDarkMode((prevState) => !prevState),
    [setDarkMode]
  );

  const contextValue = useMemo(
    () => ({ darkMode, toggleDarkMode }),
    [darkMode, toggleDarkMode]
  );

  return (
    <DarkModeContext.Provider value={contextValue}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </DarkModeContext.Provider>
  );
}
