import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import NextApp from "next/app";
import { BaseLayout, DarkModeProvider, ProductProvider } from "@/components";
import { generateProducts, ProductProps } from "@/lib";

interface IAppProps extends AppProps {
  initialProducts: ProductProps[];
}

function App({ Component, pageProps, initialProducts }: IAppProps) {
  return (
    <DarkModeProvider>
      <ProductProvider initialProducts={initialProducts}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ProductProvider>
    </DarkModeProvider>
  );
}

App.getInitialProps = async (appContext: AppContext): Promise<Omit<IAppProps, "Component" | "router">> => {
  const appProps = await NextApp.getInitialProps(appContext);
  const initialProducts = generateProducts(30);
  return { ...appProps, initialProducts };
};

export default App;
