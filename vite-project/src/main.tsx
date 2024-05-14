import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme"; // Fix the file name in the import statement

import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

