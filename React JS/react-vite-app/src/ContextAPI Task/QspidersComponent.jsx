import React from "react";
import StudentA from "./StudentA";
import StudentB from "./StudentB";

import { createContext } from "react";
export let QspidersContext = createContext();

const QspidersComponent = () => {
  let link = "https://www.instagram.com/qspiders_delhi/";
  return (
    <div>
      QspidersComponent link : <a href={link}>Click Here</a>
      <QspidersContext.Provider value={link}>
        <StudentA />
        <StudentB />
      </QspidersContext.Provider>
    </div>
  );
};

export default QspidersComponent;
