import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Resume from "./components/Resume";
import FullResume from "./components/FullResume";
import About from "./components/About";
import Contact from "./components/Contact";
import IvySummer from "./components/IvySummer";
import IvyGalapagos from "./components/IvyGalapagos";
import HyperfunditBusiness from "./components/HyperfunditBusiness";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/full-resume" component={FullResume} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/ivy-summer" component={IvySummer} />
          <Route path="/ivy-galapagos" component={IvyGalapagos} />
          <Route path="/hyperfundit-business" component={HyperfunditBusiness} />
          <Route path="/" component={Work} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
