import React, { useState } from "react";

function DateTime() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateClick = () => {
    const currentDate = new Date().toLocaleDateString();
    setDate(currentDate);
  };

  const handleTimeClick = () => {
    setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }, 1000);
  };

  return (
    <div>
      <h1>Current Date and Time</h1>
      <button onClick={handleDateClick}>Show Date</button>
      <button onClick={handleTimeClick}>Show Time</button>
      <div>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
      </div>
    </div>
  );
}

export default DateTime;
