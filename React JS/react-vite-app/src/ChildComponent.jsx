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
/*
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
*/

// ? ===== Default props ====
// 1st Way
/*
let ChildComponent = props => {
  console.log(props);

  let {
    sname = "No Name",
    age = 18,
    course = "Generic",
    skills = [],
    friend = { fname: "No friends", address: "not mentioned", mobile: 0 },
  } = props;

  return (
    <>
      <hr />
      <h2>I am ChildComponent</h2>
      <h3>Name : {sname}</h3>
      <h3>Age : {age}</h3>
      <h3>Course : {course}</h3>
      <h3>
        Skills:
        {skills.map((val, ind) => {
          console.log(val, "----", ind);
          return <li key={ind}>{val}</li>;
        })}
      </h3>
      <h3>Friend Name: {friend.fname}</h3>
      <h4>Mobile No : {friend.mobile}</h4>
      <h4>Address: {friend.address}</h4>
      <hr />
    </>
  );
};
export default ChildComponent;
*/

// 2nd way:
/*
let ChildComponent = props => {
  console.log(props);

  return (
    <>
      <hr />
      <h2>I am ChildComponent</h2>
      <h3>Name : {props.sname}</h3>
      <h3>Age : {props.age}</h3>
      <h3>Course : {props.course}</h3>
      <h3>
        Skills:
        {props.skills.map((val, ind) => {
          console.log(val, "----", ind);
          return <li key={ind}>{val}</li>;
        })}
      </h3>
      <h3>Friend Name: {props.friend.fname}</h3>
      <h4>Mobile No : {props.friend.mobile}</h4>
      <h4>Address: {props.friend.address}</h4>
      <hr />
    </>
  );
};

ChildComponent.defaultProps = {
  sname: "No Name",
  age: 18,
  course: "Generic",
  skills: [],
  friend: { fname: "No friends", address: "Not Mentioned", mobile: 0 },
};

export default ChildComponent;
*/

// ? Pure JavaScript Data types
/*
let ChildComponent = props => {
  console.log(props);

  let { sname, age, isPlaced, companyName, salary,  skills, address, dob, clickFn } = props;

  return (
    <>
      <h2>I am ChildComponent</h2>
      <h3>Name : {sname}</h3>
      <h3>Age : {age}</h3>
      <h3>Placed Status : {isPlaced === true ? "YES" : "NO"}</h3>
      <h3>Placed Status : {isPlaced ? "YES" : "NO"}</h3>
      <h3>
        Company Name :
        {companyName === undefined ? "Not Mentioned" : companyName}
      </h3>
      <h3>Salary : {salary === null ? 0 : salary}</h3>
      <h3>
        Skills :
        {skills.map((val, ind) => {
          return (
            <div key={ind}>
              SK00{ind + 1} - {val}
            </div>
          );
        })}
      </h3>
      <h3>Address : </h3>
      <div>Street No : {address.streetno}</div>
      <div>Colony : {address.colony}</div>
      <div>Pincode : {address.pincode}</div>
      <div>DOB : {dob.toString()}</div>
      <button onClick={clickFn}>click Here </button>
    </>
  );
};
export default ChildComponent;
*/

// ? ==== props drilling ====
/*
import GrandChildComponent from "./GrandChildComponent";
let ChildComponent = props => {
  console.log(props);
  console.log("From ChildComponent -", props.products);

  return (
    <>
      <h2>I am ChildComponent</h2>
      <h2>
        Link : <a href={props.data}>Click Here</a>
      </h2>
      <GrandChildComponent d={props} />
    </>
  );
};
export default ChildComponent;
*/

// ? ========= prop types ==============
/*
import PropTypes from "prop-types";

let ChildComponent = props => {
  console.log(props);
  let { sname, course, skills } = props;
  return (
    <>
      <h2>I am ChildComponent </h2>
      <h3>Name : {sname}</h3>
      <h3>Course : {course}</h3>
      <h3>
        Skills :
        {skills.map((val, ind) => {
          return <li key={ind}>{val}</li>;
        })}
      </h3>
    </>
  );
};

ChildComponent.propTypes = {
  sname: PropTypes.string,
  age: PropTypes.number,
  course: PropTypes.string,
  skills: PropTypes.array,
  address: PropTypes.object,
  isMarried: PropTypes.bool,
};

export default ChildComponent;
*/

// ! ================ Task on Components , Props , CSS =================
/*
import style from "./meeshoTask.module.css";

let Product = props => {
  console.log(props);
  let { category, data } = props;
  return (
    <>
      <h2>{category}</h2>

      <section id={style.productsContainer}>
        {data.map((val, ind) => {
          console.log(ind, "----", val);

          return (
            <article className={style.product}>
              <div id={style.imagePart}>
                <img src={val.image} alt="" />
              </div>
              <div id={style.infoPart}>
                <div>{val.title}</div>
                <div>{val.price}</div>
                <div>free delivery</div>
                <div>
                  <span>{val.ratings}</span>
                  <span>{val.reviews}</span>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};
export default Product;
*/

// ! ============== useState() Hook ============
// ? Example 6:
/*
let ChildComponent = props => {
  console.log(props);
  return (
    <>
      <h1>I am ChildComponent</h1>
    </>
  );
};
export default ChildComponent;
*/

// ! ================================= LIfe Cycle Methods of a Component ========================
// ! =========== UnMounting Phase =============
/*
import React from "react";

class ChildComponent extends React.Component {
  constructor(props) {
    super();
    console.log("I am Mounted 🕺🕺💃💃🕺💃🕺");
  }
  componentWillUnmount() {
    console.log("I am componentWillUnmount() Method 😭😭😭");
  }

  render() {
    console.log("I am render method - childcomponent");
    return <h1>I am ChildComponent</h1>;
  }
}
export default ChildComponent;
*/

// ! ================= useEffect() Hook ==================
import React, { useEffect, useState } from "react";

const ChildComponent = () => {
  let [myData, setData] = useState([]);

  useEffect(() => {
    console.log("I will work as componentDidMount method");
    // here i will get the data

    let getData = async () => {
      console.log("I am fetching Data.....");
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      //  console.log(data);
      setData(data);
    };
    getData();

    // cleanUp function
    return () => {
      console.log("I will work as componentWillUnmount method");
      // as component removed i will delete here.
      setData([]);
    };
  }, []);

  console.log(myData);

  return <h1>ChildComponent</h1>;
};

export default ChildComponent;
