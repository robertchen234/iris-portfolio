import React, { Component } from "react";
// import { withRouter, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
            <p>Work</p>
            <p>Resume</p>
        </div>
        <div className="navbar-mid">
          <h3>IRIS Z LEE</h3>
        </div>
        <div className="navbar-right">
            <p>About</p>
            <p>Contact</p>
        </div>
      </div>
    );
  }
}

export default NavBar;
// export default withRouter(NavBar);
