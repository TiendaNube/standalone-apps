import { BrowserRouter, Route, Routes } from "react-router-dom";

import { BaseLayout, DarkModeProvider, ProductProvider } from "./components";
import { HomePage, ExamplesPage, ProductsPage, ConfirmationModalExamplePage, FormExamplePage, LoginExamplePage, PageTemplateExamplePage, ProductListExamplePage, SettingsExamplePage, SimpleListExamplePage } from "./pages";
import { generateProducts } from "./lib";

function App() {
  const initialProducts = generateProducts(30);

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <ProductProvider initialProducts={initialProducts}>
          <BaseLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/examples" element={<ExamplesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/examples/confirmation-modal" element={<ConfirmationModalExamplePage />} />
              <Route path="/examples/form" element={<FormExamplePage />} />
              <Route path="/examples/login" element={<LoginExamplePage />} />
              <Route path="/examples/page-template" element={<PageTemplateExamplePage />} />
              <Route path="/examples/product-list" element={<ProductListExamplePage />} />
              <Route path="/examples/settings" element={<SettingsExamplePage />} />
              <Route path="/examples/simple-list" element={<SimpleListExamplePage />} />
            </Routes>
          </BaseLayout>
        </ProductProvider>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
