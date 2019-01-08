import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="https://ngl4.github.io/v3_personal_portfolio" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
