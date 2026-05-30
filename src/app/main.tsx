import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { ThemeProvider } from "@/shared/theme/ThemeProvider";
import { applyTheme, getInitialTheme } from "@/shared/theme/theme";
import App from "./App";

applyTheme(getInitialTheme());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
