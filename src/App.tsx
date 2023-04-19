import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";
import Joyride from "react-joyride";

import { Header } from "./components/Header";
import { NotFound } from "./components/NotFound";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { steps } from "./helpers/steps";

function App() {
  return (
    <Fragment>
      <Joyride
        steps={steps}
        continuous
        disableOverlayClose
        hideCloseButton
        locale={{ last: "Finish" }}
        run={true}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
