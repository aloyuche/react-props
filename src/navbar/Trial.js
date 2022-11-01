import Navbar from "../JulieAssignmnt/Navbar";
import React from "react";

const Trial = () => {
  return (
    <header>
      <div className="trial">
        <img src="./images/icons/_LOGO.png" width="100px" alt="logo" />
        <Navbar />
        <ul className="nav">
          <li>
            <Link></Link>
          </li>
        </ul>
        {/* <input type="text" placeholder="Search" /> */}
      </div>
      <div className="banner">
        {/* <img src="./images/pc6.jpg" width={"100%"} alt="" /> */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            padding: "20px",
          }}
        >
          Welcome To our Home Page
        </h1>
        <p>
          <input className="search" placeholder="Search" />
        </p>
      </div>
    </header>
  );
};

export default Trial;
