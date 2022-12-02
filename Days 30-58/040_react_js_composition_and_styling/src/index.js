import React from "react";
import ReactDOM from "react-dom";

let time_of_day = new Date().getHours();
let greeting;
let customStyle;

if (time_of_day < 12) {
  greeting = "Good Morning";
  customStyle = {
    color: "red"
  };
} else if (time_of_day < 18) {
  greeting = "Good Afternoon";
  customStyle = {
    color: "green"
  };
} else {
  greeting = "Good Evening";
  customStyle = {
    color: "blue"
  };
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);