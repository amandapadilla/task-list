import React from "react";
import { Link } from "react-router-dom";

const Task = props => {
  const handleChangeButton = () => {
    props.handleTaskStatus(props.task.id);
  };
  return (
    <div>
      <h2>{props.task.name}</h2>
      <p>
        Estado: {props.task.completed === true ? "Completado" : "No completado"}
      </p>
      <button onClick={handleChangeButton}>Cambiar</button>
      <Link to={`/detail/${props.task.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

export default Task;
