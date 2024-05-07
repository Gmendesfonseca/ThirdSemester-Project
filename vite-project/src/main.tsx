import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./Theme";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

