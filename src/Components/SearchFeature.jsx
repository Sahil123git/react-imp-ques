import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [input, setIntput] = useState("");

  async function fillData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setSearch(response);
      });
  }
  const filterSearch = (key) => {
    console.log(key);
    if (key.length === 0) {
      // console.log("here");
      setSearch(data);
      // console.log(search);
    } else {
      setSearch(
        data.filter((ele) =>
          ele.title.toLowerCase().includes(key.toLowerCase())
        )
      );
      // console.log(search);
    }
  };
  function searchData(e) {
    const givenData = e.target.value;
    setIntput(givenData);

    // console.log(givenData, givenData.length);

    filterSearch(givenData);
  }
  useEffect(() => {
    fillData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editigdfgdfgdfgng to see some magic happen!</h2>
      <input
        name="search"
        placeholder="enter to search"
        value={input}
        onChange={searchData}
      />
      <ol>
        {search.map((ele, index) => (
          <li key={index}>{ele.title}</li>
        ))}
      </ol>
    </div>
  );
}
