import React from "react";
import Task from "./Task";

const List = props => {
  return (
    <ul>
      {props.tasks.map((task, index) => {
        return (
          <li key={index}>
            <Task task={task} handleTaskStatus={props.handleTaskStatus} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
