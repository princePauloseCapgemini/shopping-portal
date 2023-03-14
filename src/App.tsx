import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ShopBox } from "./pages/ShopBox";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShopBox />} />
          {/* <Route path="/product/:id" element={<DashboardMessages />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
