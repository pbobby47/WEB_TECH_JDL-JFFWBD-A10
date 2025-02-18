// ! =================== HOC =======================
import React from "react";

const HOC = ComponentName => {
  return function counter(props) {
    console.log("I am from HOC");
    console.log(props.id);
    return (
      <ComponentName id={props.id} sname="Amit" age={20} course="React JS" />
    );
  };
};

export default HOC;
