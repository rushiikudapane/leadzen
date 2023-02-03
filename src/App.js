import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [object, setObject] = useState({});
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home setObject={setObject} />} />
            <Route path="/details" element={<Details object={object} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
