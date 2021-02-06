import React from "react";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { Switch, Route, Redirect } from "react-router-dom";


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Redirect to ="/" />


      </Switch>
    </>
  );
};

export default App;
