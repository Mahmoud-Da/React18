import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import them from "../src/them";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={them}>
      <ColorModeScript
        initialColorMode={them.config.initialColorMode}
      ></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
