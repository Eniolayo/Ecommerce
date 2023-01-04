import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import Theme from "./theme/";
import LayoutRoute from "./routes";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <LayoutRoute />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
