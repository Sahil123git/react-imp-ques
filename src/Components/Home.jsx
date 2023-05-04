import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home Page</Link>
        </li>
        <li>
          <Link to={"/Calculator"}>Calculator</Link>
        </li>
        <li>
          <Link to={"/DateTime"}>DateTime</Link>
        </li>
        <li>
          <Link to={"/refreshTime"}>RefreshTime</Link>
        </li>
        <li>
          <Link to={"/clock"}>Digital Clock</Link>
        </li>
        <li>
          <Link to={"/greeting"}>Greeting</Link>
        </li>
        <li>
          <Link to={"/form"}>Form</Link>
        </li>
      </ul>
      <h3>Home page</h3>
    </div>
  );
};

export default Home;
