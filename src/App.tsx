import { lazy } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { NotFound } from "./components/NotFound";

const queryClient = new QueryClient({});

const ShopBox = lazy(() => import("./pages/ShopBox"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShopBox />} />
            {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
