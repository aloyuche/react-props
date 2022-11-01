// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
// import Main from "./Main";
// import MainImage from "./components/MainImage";
import Contex from "./components/Contex";
import dataImage from "./components/dataImage";
import MainImage from "./components/MainImage";
import Form from "./JulieAssignmnt/Form";
// import Home from "./JulieAssignmnt/Home";
// import Task from "./Task";
import SideBar from "./components/SideBar";
// import Home from "../../../FirstReact/assignment/src/routerComponents/Home";
import About from "./navbar/About";
import Contact from "./navbar/Contact";
import Service from "./navbar/Service";
import Home from "./navbar/Home";
// import Task from "./Task";
// import Trial from "./navbar/Trial";

function App() {
  const data = dataImage.map((items) => {
    return (
      <Contex
        key={items.id}
        image={items.image}
        name={items.name}
        dept={items.dept}
        rate={items.stat.rate}
        review={items.stat.review}
        country={items.country}
      />
    );
  });

  // const [darkMode, setDarkMode] = React.useState(true);

  // function toggleDarkMode() {
  //   setDarkMode((prevMode) => !prevMode);
  // }

  return (
    <div className="apps-content">
      <header className="header">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        {/* <Trial darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      </header>
      <div className="main">
        {/* <Task darkMode={darkMode} /> */}
        {data}
      </div>
      <div className="container">
        <SideBar />
        {/* <MainImage /> */}
        {/* <Form /> */}
      </div>
      <div className="main">{data}</div>
    </div>
  );
}

export default App;
