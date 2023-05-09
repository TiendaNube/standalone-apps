import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout, DarkModeProvider, ProductProvider } from "./components";
import {
  HomePage,
  ExamplesPage,
  ProductsPage,
  ConfirmationModalExamplePage,
  FormExamplePage,
  LoginExamplePage,
  PageTemplateExamplePage,
  ProductListExamplePage,
  SettingsExamplePage,
  SimpleListExamplePage,
} from "./pages";
import { generateProducts } from "./lib";
import { useFetch } from "./hooks";

function App() {
  const initialProducts = generateProducts(30);
  const query = new URLSearchParams(window.location.search);
  const code = query.get("code");
  const { request } = useFetch();

  useEffect(() => {
    if (code) {
      handleAuthentication();
    }
  }, [code]);

  const handleAuthentication = async () => {
    try {
      const resp = await request({
        url: `/auth?code=${code}`,
        method: "GET",
      });
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("code", code);

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <ProductProvider initialProducts={initialProducts}>
          <BaseLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/examples" element={<ExamplesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route
                path="/examples/confirmation-modal"
                element={<ConfirmationModalExamplePage />}
              />
              <Route path="/examples/form" element={<FormExamplePage />} />
              <Route path="/examples/login" element={<LoginExamplePage />} />
              <Route
                path="/examples/page-template"
                element={<PageTemplateExamplePage />}
              />
              <Route
                path="/examples/product-list"
                element={<ProductListExamplePage />}
              />
              <Route
                path="/examples/settings"
                element={<SettingsExamplePage />}
              />
              <Route
                path="/examples/simple-list"
                element={<SimpleListExamplePage />}
              />
            </Routes>
          </BaseLayout>
        </ProductProvider>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
