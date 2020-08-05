import React from "react";
import Typist from "react-typist";

export default function TellTime() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Evening";
  }

  return (
    <div className="center">
      <Typist >
        <span>
          <h2>Good {timeOfDay}</h2>
        </span>
        <Typist.Backspace count={15} delay={200} />
        <span>
          <h2>Let's work on your list.</h2>
          <h3>What shall we do next?</h3>
        </span>
      </Typist>
    </div>
  );
}
