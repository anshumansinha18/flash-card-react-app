import React, { useState } from "react";

export default function Card({ question }) {
  const [displayText, setDisplayText] = useState(question);
  const [disp, setDisp] = useState(true);
  function handleClick() {
    setDisp((disp) => !disp);
  }
  return (
    <div
      className="card"
      style={
        disp ? { background: "rgb(241, 241, 241)" } : { background: "red" }
      }
      onClick={handleClick}
    >
      {disp ? displayText.question : displayText.answer}
    </div>
  );
}
