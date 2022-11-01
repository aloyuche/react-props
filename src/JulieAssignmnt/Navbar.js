import React from "react";

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <div className="toggler">
        <p className="toggler-light">Light</p>
        <div className="toggler-slide" onClick={props.toggleDarkMode}>
          <div className="toggle-slider-circle"></div>
        </div>
        <p className="toggler-dark">Dark</p>
      </div>
    </nav>
  );
};

export default Navbar;
