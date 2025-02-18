import { useContext } from "react";
import StudentB1 from "./StudentB1";
import StudentB2 from "./StudentB2";
import { QspidersContext } from "./QspidersComponent";

const StudentB = () => {
  let myData = useContext(QspidersContext);
  console.log("data from useContext - ", myData);

  return (
    <div>
      StudentB - Link: <a href={myData}>Click Here</a>
      <QspidersContext.Consumer>
        {data => {
          console.log("data from consumer - ", data);
        }}
      </QspidersContext.Consumer>
      <StudentB1 />
      <StudentB2 />
    </div>
  );
};

export default StudentB;
