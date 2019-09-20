import React from "react";

const Detail = props => {
  //   console.log(props);
  if (props.task === undefined) {
    return <div>Cargando...</div>; //Loading
  } else {
    return (
      <div>
        <h2>{props.task.name}</h2>
        <p>{props.task.description}</p>
        <p>
          Estado:{" "}
          {props.task.completed === true ? "Completado" : "No completado"}
        </p>
      </div>
    );
  }
};

export default Detail;
