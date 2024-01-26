// part 1
  import React, { useState } from "react";

function App() {
  const [currentTime, setTime] = useState(0);

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
