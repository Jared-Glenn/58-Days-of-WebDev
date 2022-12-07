import React, { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setNote(value);
  }

  function handleAdd() {
    const newList = [...list, note];
    setList(newList);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={note} />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
