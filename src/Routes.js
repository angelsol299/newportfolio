import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Curriculum from "./pages/curriculum/Curriculum";
import Portfolio from "./pages/portfolio/Portfolio";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/curriculum" component={Curriculum} />
        <Route path="/portfolio" component={Portfolio} />

        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
