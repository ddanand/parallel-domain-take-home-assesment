import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

// import app components
import Header from "./components/Header";
import Home from "./components/Home";
import JobsPageHeader from "./components/JobsPageHeader/index.tsx";

import theme from "./theme/mui";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
            <Route exact path="/" element={(
              <>
                <CssBaseline />
                <Header />
                <JobsPageHeader />
                <Home />
              </>
            )}/>
          </Routes>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
