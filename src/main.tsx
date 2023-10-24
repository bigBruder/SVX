import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./components/UI/muiSettings/index.ts";
import { MuiBreakpointsProvider } from "./components/contexts/muiBreakpointsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MuiBreakpointsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiBreakpointsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
