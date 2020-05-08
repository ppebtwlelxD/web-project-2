import React from "react";
import ReactDOM from "react-dom";

import * as LogInTitel from "./LogInTitel.jsx";
import * as LogInText from "./LogInText.jsx";
import * as LogInForm from "./LogInForm.jsx";

function Login() {
    return (
      <div id="Login">
        <LogInTitel />
        <LogInText />
        <LogInForm />
      </div>
    );
  }