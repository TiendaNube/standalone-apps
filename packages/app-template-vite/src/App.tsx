import { Suspense } from "react";
import { ToastProvider } from "@nimbus-ds/components";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

import { DarkModeProvider } from "./components";
import Loading from "./pages/LoadingPage";

import Router from "./router";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          <ToastProvider>
            <BrowserRouter basename="/">
              <Router />
            </BrowserRouter>
          </ToastProvider>
        </DarkModeProvider>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
