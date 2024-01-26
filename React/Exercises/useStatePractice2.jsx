// part 2
import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);

  let now = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(now);

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
