import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonStyling, setButtonStyling] = useState({
    backgroundColor: "white"
  });

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOut() {
    setButtonStyling({ backgroundColor: "white" });
  }

  function handleMouseOver() {
    setButtonStyling({ backgroundColor: "black" });
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={buttonStyling}
        onClick={handleClick}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
