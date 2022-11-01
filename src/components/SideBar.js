import React from "react";
// import { Component } from "react";
import { useState, useEffect } from "react";
import MainClock from "./MainClock";
// import MainImage from "./MainImage";

const SideBar = () => {
  const [ClockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  const [result, setOut] = React.useState("YES");

  function handleClick() {
    setOut("NO");
  }

  return (
    <div className="sidebar">
      <div className="clock">
        <h1 className="clock-side">{ClockState}</h1>
        <span></span>
      </div>
      <hr />
      <div className="callout">
        <h2>Did you go to Church on Sunday?</h2>
        <div className="setout-yes" onClick={handleClick}>
          <div className="result">{result}</div>
        </div>
      </div>
      <hr />
      <div></div>
      <MainClock />
      <hr />
    </div>
  );
};

export default SideBar;
