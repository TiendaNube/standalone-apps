import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider, ProductProvider } from "./components";
import { Loading } from "./pages";
import { generateProducts } from "./lib";
import { useFetch } from "./hooks";

import Router from "./Router";

function App() {
  const initialProducts = generateProducts(30);
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          <BrowserRouter basename="/">
            <ProductProvider initialProducts={initialProducts}>
              <Router />
            </ProductProvider>
          </BrowserRouter>
        </DarkModeProvider>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
