import React from "react";
import StudentA1 from "./StudentA1";
import StudentA2 from "./StudentA2";
import { QspidersContext } from "./QspidersComponent";

const StudentA = () => {
  return (
    <div>
      StudentA
      <QspidersContext.Consumer>
        {data => {
          console.log("data from student A -", data);
        }}
      </QspidersContext.Consumer>
      <StudentA1 />
      <StudentA2 />
    </div>
  );
};

export default StudentA;
