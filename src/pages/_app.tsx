import {
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
  useEffect,
} from "react";

import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import NextApp from "next/app";
import { BaseLayout } from "@/components";
import { generateProducts, ProductProps } from "@/lib";

interface IDarkModeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface IProductContext {
  products: ProductProps[];
  addProducts: (count: number) => void;
}

interface IProductProvider {
  children: React.ReactNode;
  initialProducts: ProductProps[];
}

interface IAppProps extends AppProps {
  initialProducts: ProductProps[];
}

const DarkModeContext = createContext<IDarkModeContext>(null as any);

export const useDarkMode = () => useContext(DarkModeContext);

const ProductContext = createContext<IProductContext | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider: React.FC<IProductProvider> = ({ children, initialProducts }) => {
  const [products, setProducts] = useState<ProductProps[]>(initialProducts);

  const addProducts = (count: number) => {
    const maxId = Math.max(...products.map((product) => product.id), 0);
    const newProducts = generateProducts(count, maxId);
    setProducts((prevProducts) => [...prevProducts, ...newProducts]);
  };

  return (
    <ProductContext.Provider value={{ products, addProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

function App({ Component, pageProps, initialProducts }: IAppProps) {
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
      <ProductProvider initialProducts={initialProducts}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ProductProvider>
    </DarkModeContext.Provider>
  );
}

App.getInitialProps = async (appContext: AppContext): Promise<Omit<IAppProps, "Component" | "router">> => {
  const appProps = await NextApp.getInitialProps(appContext);
  const initialProducts = generateProducts(30);
  return { ...appProps, initialProducts };
};

export default App;
