import React, { useState } from "react";
import "./style.css";
import Search from "./Components/Search/Search";
import Movies from "./Components/Movies/Movies";

export default function App() {
  const [name, setName] = useState('');

  return (
    <div id="container">
      <h1> &#9735; Search a Movie &#9735;</h1>
      <Search name={name} setName={setName} />
      <Movies name={name} />
    </div>
  );
}
