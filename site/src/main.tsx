import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./pages/index";
import { theme } from "./chakra/theme";
import Layout from "./components/Layout/Layout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Layout>
          <App />
        </Layout>
      </ChakraProvider>
    </React.StrictMode>
  </RecoilRoot>
);
