import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Clock = () => {
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timeID = setInterval(() => {
      updateTime();
    }, 1000);

    //By calling clearInterval inside the useEffect cleanup function, you ensure that the interval is cleaned up when the component is unmounted or when the dependency array (i.e., the second argument to useEffect) changes. This ensures that your application is more performant and less prone to bugs caused by memory leaks or other issues.

    return () => {
      clearInterval(timeID);
    };
  }, []);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }
  function backHome() {
    //navigate("/");
    navigate(-1);
  }
  return (
    <div>
      <h3>Digital Clock</h3>
      <p>{time}</p>
      <button onClick={backHome}>Back to home</button>
    </div>
  );
};

export default Clock;
