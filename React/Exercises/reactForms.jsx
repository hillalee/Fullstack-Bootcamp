import React, { useState } from "react";

function App() {
  // setInterval(1000);

  const [headingText, setHeadingText] = useState("Hello");
  const [name, setName] = useState("");

  function handleClick() {
    event.preventDefault();
    setHeadingText("Hello, " + name);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
