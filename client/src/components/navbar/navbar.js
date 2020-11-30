import React from "react";
import Searchpage from "../../pages/Searchpage";
import Savedpage from "../../pages/Savedpage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Navbar() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">The Book Nook</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link" href="/">Search</a>
                <a className="nav-link" href="/saved">Saved</a>
                </div>
            </div>
        </nav>
        <div>
            <Switch>
                <Route exact path="/" component={Searchpage}/>
                <Route exact path="/Saved" component={Savedpage} />
            </Switch>
        </div>
    </Router>
  );
}

export default Navbar;
