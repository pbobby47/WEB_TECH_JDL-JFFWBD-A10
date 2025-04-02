// ? Example 1:
/*
import React from "react";

const useGreetList = person => {
  return `Hii , How are you ${person}`;
};

export default useGreetList;
*/

// ? Example 2:
import React from "react";

const useGreetList = persons => {
  console.log(persons);
  let myoutput = [];

  persons.map((val, ind) => {
    myoutput.push(`Hii How are you ${val}`);
  });

  return myoutput;
};

export default useGreetList;
