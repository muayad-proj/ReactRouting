import React, { Component } from "react";
import Welcome from "./components/Welcome/Welcome";
import Errorpage from"./components/404page/404page"
import Clock from "./components/Clock/Clock";
import Contact from "./components/Contact/Contact";
//Import the Navigation component
import Navigation from "./components/navigation/Navigation";
import { Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        {/* render the Navigation component */}
        <Navigation />
        <Switch>

        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Home page" />}
        />
        <Route
          exact
          path="/welcome"
          render={(props) => <Welcome {...props} name="MUAYAD" />}
        />

        <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name= {props.match.params.name} />}
        />
        

        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route> 
          <Errorpage/>
        </Route>
        </Switch>
      </div>
    );
  }
}
export default App;