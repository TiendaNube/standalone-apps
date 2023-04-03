import { useState, createContext, useContext, useCallback, useMemo, useEffect, ReactNode } from "react";

interface IDarkModeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<IDarkModeContext>(null as any);

export const useDarkMode = () => useContext(DarkModeContext);

interface IDarkModeProvider {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<IDarkModeProvider> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleDarkMode = useCallback(
    () => setDarkMode((prevState) => !prevState),
    [setDarkMode]
  );

  const contextValue = useMemo(
    () => ({ darkMode, toggleDarkMode }),
    [darkMode, toggleDarkMode]
  );

  useEffect(() => {
    setMounted(true);
    const storageValue = localStorage.getItem("darkMode");
    if (storageValue) {
      setDarkMode(JSON.parse(storageValue));
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode, mounted]);

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
