import { Routes, BrowserRouter, Route } from "react-router-dom";
import Calculator from "./Components/Calculator.jsx";
import Home from "./Components/Home.jsx";
import DateTime from "./Components/Time/DateTime.jsx";
import RefreshTime from "./Components/Time/RefreshTime.jsx";
import Clock from "./Components/Time/Clock.js";
import FormHeader from "./Components/FormHeader.jsx";
import FormPract from "./Components/FormPractice.jsx";
import Greeting from "./Components/Greeting.jsx";
import HideBlackWhite from "./Components/HideEleBlackWhite.jsx";
import UseContextChild from "./Components/useContextChilds.jsx";
import DidMountClass from "./Components/DidMountClass.jsx";

function App() {
  return (
    <div>
      <h1>header</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Calculator" element={<Calculator />}></Route>
          <Route path="/DateTime" element={<DateTime />}></Route>
          <Route path="/refreshTime" element={<RefreshTime />}></Route>
          <Route path="/clock" element={<Clock />}></Route>
          <Route path="/form" element={<FormHeader />}></Route>
          <Route path="/greeting" element={<Greeting />}></Route>
          <Route path="/form" element={<FormHeader />}></Route>
          <Route path="/context" element={<UseContextChild />}></Route>
          <Route path="/hide" element={<HideBlackWhite />}></Route>
          <Route path="/didMount" element={<DidMountClass />}></Route>
        </Routes>
      </BrowserRouter>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
