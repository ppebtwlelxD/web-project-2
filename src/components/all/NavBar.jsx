import React from "react";
import ReactDOM from "react-dom";

class NavBar extends React.Component {
    render() {
      return (
        <nav id="mavbar" className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="/#">
            Navigation
          </a>
          <ul>
            <li>Project</li>
            <li>company</li>
            <li>Log Out</li>
          </ul>
        </nav>
      );
    }
  }
  