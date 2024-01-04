import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createTheme,
  alpha,
  getContrastRatio,
  ThemeProvider,
} from "@mui/material/styles";
import App from "./App.tsx";
import { store } from "./store";
import "./App.scss";
declare module "@mui/material/styles" {
  interface Palette {
    purple: Palette["primary"];
    green: Palette["primary"];
  }

  interface PaletteOptions {
    purple?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    purple: true;
    green: true;
  }
}

const secondaryMain = "#ededed";
const purpleMain = "#a59ad7";
const greenMain = "#0bf387";

const theme = createTheme({
  palette: {
    secondary: {
      main: secondaryMain,
      light: alpha(secondaryMain, 0.5),
      dark: alpha(secondaryMain, 0.9),
      contrastText:
        getContrastRatio(secondaryMain, "#fff") > 4.5 ? "#111" : "#111",
    },
    purple: {
      main: purpleMain,
      light: alpha(purpleMain, 0.5),
      dark: alpha(purpleMain, 0.9),
      contrastText:
        getContrastRatio(purpleMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    green: {
      main: greenMain,
      light: alpha(greenMain, 0.5),
      dark: alpha(greenMain, 0.9),
      contrastText: getContrastRatio(greenMain, "#111") > 4.5 ? "#111" : "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
