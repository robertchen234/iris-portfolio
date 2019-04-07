import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = { currentLink: "work" };

  clickHandler = path => {
    this.setState({ currentLink: path });
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <p>
            <Link
              to="/"
              className={
                this.state.currentLink === "work" ? "currentLink" : null
              }
              onClick={() => this.clickHandler("work")}
            >
              Work
            </Link>
          </p>
          <p>
            <Link
              to="/resume"
              className={
                this.state.currentLink === "resume" ? "currentLink" : null
              }
              onClick={() => this.clickHandler("resume")}
            >
              Resume
            </Link>
          </p>
        </div>
        <div className="navbar-mid">
          <h3>
            <Link
              to="/"
              className="currentLink"
              onClick={() => this.clickHandler("work")}
            >
              IRIS Z LEE
            </Link>
          </h3>
        </div>
        <div className="navbar-right">
          <p>
            <Link
              to="/about"
              className={
                this.state.currentLink === "about" ? "currentLink" : null
              }
              onClick={() => this.clickHandler("about")}
            >
              About
            </Link>
          </p>
          <p>
            <Link
              to="/contact"
              className={
                this.state.currentLink === "contact" ? "currentLink" : null
              }
              onClick={() => this.clickHandler("contact")}
            >
              Contact
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default NavBar;
// export default withRouter(NavBar);
