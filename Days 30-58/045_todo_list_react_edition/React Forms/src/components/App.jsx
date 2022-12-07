import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [nameComplete, setNameComplete] = useState("");

  function handleChange(event) {
    setName(event.target.value);
    event.preventDefault();
  }

  function handleClick() {
    setNameComplete(name);
  }

  return (
    <div className="container">
      <h1>Hello {nameComplete}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
