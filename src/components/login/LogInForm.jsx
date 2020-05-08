import React from "react";
import ReactDOM from "react-dom";

function LogInForm() {
    return (
      <form id="LogInForm" action="/action_page.php">
        <label for="user"></label>
        <input type="text" id="user" name="user" value="Username"></input>
        <label for="pword"></label>
        <input type="text" id="pword" name="pword" value="Password"></input>
        <br></br>
        <input type="checkbox" id="remeber" name="remeber" value="1"></input>
        <label for="remeber">husk meg</label>
        <br></br>
        <input id="logbutton" type="submit" value="Log in"></input>
      </form>
    );
  }