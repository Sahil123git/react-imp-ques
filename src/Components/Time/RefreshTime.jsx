import React, { useEffect, useState } from "react";

const RefreshTime = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }
  return (
    <div className="refresh-time">
      <h1>Refresh or click on button to see change in Time</h1>
      <p>{time}</p>
      <button onClick={updateTime}>Update Time</button>
    </div>
  );
};

export default RefreshTime;
