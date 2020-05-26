import React, { Component } from "react";
import Header from "./components/Header";
import "./photo.css";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import login from "./components/login";
import Monitor from "./Monitor";
import dash from "./components/dash";
import regis from "./components/regis"; 
import bufnew from "./components/bufnew";
import out from "./components/out";
import regisfarm from "./components/regisfarm";
import search from "./components/search";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row  ">
          <div className="container-fluid">
            <Header />
          </div>
        </div>

        <div className="row"></div>
        <div className="row r1"></div>
      </div>
    );
  }
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Monitor} />
        <Route path="/login" component={login} />
        <Route path="/dash" component={dash} />
        <Route path="/regis" component={regis} />
        <Route path="/Footer" component={Footer} />
        <Route path="/bufnew" component={bufnew} />
        <Route path="/out" component={out} />
        <Route path="/search" component={search} />
        <Route path="/regisfarm" component={regisfarm} />

      </Switch>
    );
  }
  render() {
    return (
      <div>
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    );
  }
}

export default App;
