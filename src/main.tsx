import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeConfig } from "./config/theme.config";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </React.StrictMode>
);
