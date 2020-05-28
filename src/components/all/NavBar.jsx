import React from "react";
import ReactDOM from "react-dom";

export default class NavBar extends React.Component {
    render() {
      return (
        <nav className="navbarCompany">
          <ul>
              <li><a href="/#">Project</a></li>
              <li><a href="/#">Company</a></li>
              <li><a href="/#">Log Out</a></li>
          </ul>
        </nav>
      );
    }
  }
  
