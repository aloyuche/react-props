import React from "react";

const Contex = (props) => {
  return (
    <div className="data-image">
      <img src={props.image} width="100%" alt="" className="image-data" />
      <h2> {props.name} </h2>
      <span>
        {" "}
        {props.dept} / {props.rate}, {props.review}{" "}
      </span>
      <p> {props.country} </p>
    </div>
  );
};

export default Contex;
