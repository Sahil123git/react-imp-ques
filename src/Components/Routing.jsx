import "./styles.css";
import { useState, useEffect } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import BlogPage from "./Component/BlogPages";

export default function App() {
  return (
    <div className="App">
      <h2>Header</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/BlogPages" element={<BlogPage />}></Route>
        </Routes>
      </BrowserRouter>
      <h2>Footer</h2>
    </div>
  );
}
