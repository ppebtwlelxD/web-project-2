import React from "react";
import ReactDOM from "react-dom";

import * as LogInTitel from "./LogInTitel.jsx";
import * as LogInText from "./LogInText.jsx";
import * as LogInForm from "./LogInForm.jsx";

  export default class Login extends React.Component {
    render() {
      return (
        //mmaking the tabel
        <div id="Login">
        <LogInTitel />
        <LogInText />
        <LogInForm />
      </div>
      );
    }
  }