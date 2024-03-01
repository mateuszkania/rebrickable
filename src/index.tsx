import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import fontConfig from "@/fontConfig";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import WebFont from "webfontloader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

WebFont.load(fontConfig);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
