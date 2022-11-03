import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  //used to change the state of headingText
  const [headingText, setHeading] = useState("");

  //updates heading to include users name when submit button clicked
  function handleClick() {
    setHeading(name);

    //stops page from refreshing when submit button is clicked on form
    event.preventDefault();
  }

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  //onChange listen for changes in the input enetered by the user
  //value of input should be set to name so it follows suit with the state
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
