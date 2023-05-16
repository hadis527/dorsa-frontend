import React from "react";
import "./App.css";
import AppRoute from "./Routes";
import { ThemeProvider} from "styled-components";
import { theme } from "./utils/Theme";
import AppContext from './context/AppContext'
import Dashboard from "./pages/Dashboard";
import { GlobalStyle } from "./utils/GlobalStyle";

function App() {
  return (
    <AppContext.Provider>
      <ThemeProvider theme={theme}>
        <Dashboard />
        <GlobalStyle />
      </ThemeProvider>
    </AppContext.Provider>

  );
}

export default App;
