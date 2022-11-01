import React from "react";

const Star = (props) => {
  const starIcon = props.isFilled
    ? "../images/filled-star-icon.png"
    : "../images/white-star-icon.png";
  return (
    <div>
      <img src={starIcon} width="10%" alt="" />
    </div>
  );
};

export default Star;
