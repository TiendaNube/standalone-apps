import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "@/components";
// import { Home } from "@/pages";
// import HomePage from "@/pages/HomePage/HomePage";
// import { Home } from "@/pages";
// import { ErrorPage, HomePage, Loading } from "@/pages";

const Home = React.lazy(() => import("@/pages/HomePage"));
const ExamplesPage = React.lazy(() => import("@/pages/ExamplePage"));
const ProductsPage = React.lazy(() => import("@/pages/ProductsPage"));
const ConfirmationModalExamplePage = React.lazy(
  () => import("@/pages/ExamplePage/examples/ConfirmationModalExamplePage")
);
const FormExamplePage = React.lazy(
  () => import("@/pages/ExamplePage/examples/FormExamplePage")
);
const LoginExamplePage = React.lazy(
  () => import("@/pages/ExamplePage/examples/LoginExamplePage")
);
const PageTemplateExamplePage = React.lazy(
  () => import("@/pages/ExamplePage/examples/PageTemplateExamplePage")
);
const SettingsExamplePage = React.lazy(
  () => import("@/pages/ExamplePage/examples/SettingsExamplePage")
);
const ProductListExamplePage = React.lazy(
  () => import("@/pages/ExamplePage/examples/ProductListExamplePage")
);
const SimpleListExamplePage = React.lazy(
  () => import("@/pages/ExamplePage/examples/SimpleListExamplePage")
);
const Loading = React.lazy(() => import("@/pages/LoadingPage"));

const Router: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/examples/settings" element={<SettingsExamplePage />} />
          <Route
            path="/examples/simple-list"
            element={<SimpleListExamplePage />}
          />
          <Route path="*" element={<div>errooor</div>} />
        </Routes>
      </BaseLayout>
    </Suspense>
  );
};

export default Router;
