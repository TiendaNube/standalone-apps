import React, { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "@/components";
import { AuthenticationContent } from "@/types";

const Home = React.lazy(() => import("@/pages/HomePage"));
const TutorialPage = React.lazy(() => import("@/pages/TutorialPage"));
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
  const query = new URLSearchParams(window.location.search);
  const code = query.get("code");
  const storage = localStorage.getItem("authentication");
  const authentication = storage
    ? (JSON.parse(storage as string) as AuthenticationContent)
    : null;

  const ENABLE_PRIVATE_ROUTES = useMemo(
    () => authentication?.access_token && !code,
    [authentication?.access_token, code]
  );

  return (
    <Suspense fallback={<Loading />}>
      {!ENABLE_PRIVATE_ROUTES && (
        <Routes>
          <Route path="/" element={<TutorialPage />} />
        </Routes>
      )}
      {ENABLE_PRIVATE_ROUTES && (
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
            <Route
              path="/examples/settings"
              element={<SettingsExamplePage />}
            />
            <Route
              path="/examples/simple-list"
              element={<SimpleListExamplePage />}
            />
            <Route path="*" element={<div>errooor</div>} />
          </Routes>
        </BaseLayout>
      )}
    </Suspense>
  );
};

export default Router;
