// ! ============= props ===============
// ? === Receiving Props ===
/*
let ChildComponent = props => {
  console.log("I am ChildComponent");
  console.log(props);

  return (
    <>
      <h2>I am ChildComponent</h2>
      <h3>Name : {props.sname}</h3>
      <h3>Age : {props.age}</h3>
      <h3>Course : {props.course}</h3>
    </>
  );
};
export default ChildComponent;
*/

// ? === Props Children ====
/*
let ChildComponent = props => {
  console.log("I am ChildComponent");
  console.log(props);

  return (
    <>
      <h2>I am ChildComponent</h2>
      <h3>Name : {props.name}</h3>
      {props.children}
    </>
  );
};
export default ChildComponent;
*/

// ? === props Destructuring ===
//  Example 1:
/*
let ChildComponent = props => {
  console.log(props);
  let { name, age, course } = props;
  return (
    <>
      <h2>I am ChildComponent</h2>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>Course : {course}</h3>
    </>
  );
};
export default ChildComponent;
*/

// Example 2:

let ChildComponent = props => {
  console.log(props);
  let {
    sname,
    course,
    isMarried,
    kidsCount,
    gender,
    skills: { frontend, database, backend },
    hobbies: {
      dayTimeHobbies: { publicHobies, privateHobies },
      nightTimeHobbies: { parentKnows, parentDontKnows },
    },
    qualification: { matriculation, intermediate, graduation },
  } = props;

  return (
    <>
      <h2>I am ChildComponent</h2>
      <h3>hobbies: {privateHobies}</h3>
    </>
  );
};
export default ChildComponent;
