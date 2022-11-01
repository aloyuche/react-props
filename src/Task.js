import React from "react";
import tasks from "./Tasks";

const Task = (props) => {
  return (
    <div className={props.darkMode ? "dark" : ""}>
      {tasks.map(() => (
        <h3 key={tasks.id}>{tasks.text} </h3>
        // <h3>{tasks.day} </h3>,
        // <h3>{tasks.reminder} </h3>
      ))}
    </div>
  );
};

export default Task;
