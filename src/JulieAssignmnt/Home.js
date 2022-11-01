import React from "react";
import dataHome from "./dataHome";

const Home = () => {
  const data = React.useState(dataHome);

  return (
    <div className="dialogue-box">
      <h3>{data.head}</h3>
      <p>{data.content}</p>
      <span> {data.social.facbook} </span>
    </div>
  );
};

export default Home;
