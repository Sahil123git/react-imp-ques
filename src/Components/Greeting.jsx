import React, { useState } from "react";

const Greeting = () => {
  const [wish, setWish] = useState("");
  const [name, setName] = useState("");

  const selectGreeting = () => {
    let time = new Date().getHours();
    console.log(time);
    if (time < 12) {
      setWish("Good Morning");
    } else if (time < 16) {
      setWish("Good After noon");
    } else if (time < 19) {
      setWish("Good Evening");
    } else {
      setWish("Good Night");
    }
  };
  return (
    <div>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={selectGreeting}>Submit</button>
      {wish === "" ? (
        <h3>TO be predicted</h3>
      ) : (
        <h3>
          {wish} {name}
        </h3>
      )}
    </div>
  );
};

export default Greeting;
