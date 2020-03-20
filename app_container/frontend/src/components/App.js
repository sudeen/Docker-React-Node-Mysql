import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../components/ui/Main";

import { ThemeProvider } from "@material-ui/styles"; // Used to make custom design
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          {/* All other routes are defined inside this switch component */}
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
