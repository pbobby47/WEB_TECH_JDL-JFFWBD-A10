// ! =============== component ===============
/*
Component is block of code
Rules:
    1. Component Name should starts with uppercase.
        Ex: App.jsx , Product.jsx , Card.jsx
    2. Component can be saved with .jsx or .js extension.
    3. To use this component in other components we have to use an element
       Ex: <App> </App>
       Ex: <App />

Components are classified into 2 ways
1. Class based Component
2. Function based compoent
*/

// ? ======= Class based Components =============
/*
import { Component } from "react";

class App extends Component {
  render() {
    console.log("Hii Hello how are you????");
    return <h1>Hello , I am Class Based Component</h1>;
  }
}
export default App;
*/

// ? ======= Function based Components =============
// & Case 1:
/*
function App() {
  return <h1>Hii, I am Function based Component</h1>;
}
export default App;
*/

// & Case 2:
/*
export default function () {
  console.log("Hello world");
  return <h1>Hii, I am function based Component (Anonymous)</h1>;
}
*/

// & Case 2.1:
/*
let App = function () {
  console.log("Hello world");
  return <h1>Hii, I am function based Component (Anonymous)</h1>;
};
export default App;
*/

// & Case 3:
/*
export default () => {
  console.log("Heyy I am arrow function...");
  return <h1>Hii, I am function based component (Arrow function)</h1>;
};
*/

// & Case 3.1:
/*
let App = () => {
  console.log("Heyy I am arrow function...");
  return <h1>Hii, I am function based component (Arrow function)</h1>;
};
export default App;
*/

// & Case 4:
// we should not return more than one element.
// so we have to keep all our elements in one parent element.
/*
let App = () => {
  console.log("Heyy I am arrow function...");
    return (
      <div>
        <h1>Hii, I am function based component (Arrow function)</h1>
        <h2>Bye, I am function based component (Arrow function)</h2>
      </div>
    );
};
export default App;
*/

// & Case 5:
// In the above an unwanted div is created
// to avoid we can use React.Fragment
// React.Fragment in one empty element.
/*
import React from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <React.Fragment>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </React.Fragment>
  );
};
export default App;
*/

// & Case 5.1 :
/*
import { Fragment } from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <Fragment>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </Fragment>
  );
};
export default App;
*/

// & Case 5.2:
// We can use <React.Fragment></React.Fragment> as <></>.
/*
import React from "react";

let App = () => {
  console.log("Heyy I am arrow function...");
  return (
    <>
      <h1>Hii, I am function based component (Arrow function)</h1>
      <h2>Bye, I am function based component (Arrow function)</h2>
    </>
  );
};
export default App;
*/

// ! =========== JSX ============
/*
JSX stands for JavaScript XML.
JSX looks similar to HTML but stricter than HTML.
It follow some rules.
*/

// ? Rule 1:
// JSX will return only one element
// we can use one parent element / Fragment.
/*
let App = () => {
  return (
    <>
      <h1>I am h1 Tag</h1>
      <h1>I am h1 Tag</h1>
      <h1>I am h1 Tag</h1>
      <h1>I am h1 Tag</h1>
    </>
  );
};
export default App;
*/

// ? Rule 2:
// JSX elements are case sentive
/*
let App = () => {
  console.log("I am a Component");
  return <H1>I am a Component</H1>; // ! ERROR
};

export default App;
*/

// ? Rule 3:
// If we want we can use js variable into html by using expression
// js --- html  ====> return
// html --- js  ====> {}

// ? Rule 4:
// Every element should be unique.
// for unique reference we have to use key prop.

/*
let App = () => {
  let sname = "Keshav";
  let age = 20;
  let course = "React JS";
  let skills = ["html", "css", "js", "react js", "tailwind CSS"];
  console.log(sname);
  console.log(age);
  console.log(course);

  return (
    <>
      <h1>I am {sname}</h1>
      <h1>My age is {age}</h1>
      <h1>I opted for {course}</h1>
      My skills are:
      {skills.map((val, ind) => {
        console.log(val); // items
        console.log(ind); // indexes
        return (
          <li key={ind} type="circle">
            {val}
          </li>
        );
      })}
    </>
  );
};

export default App;
*/

// ? Rule 5:
// JSX follows lowercamel case conventions
// Ex: onClick , onMouseOver

// ? Rule 6:
// common words from html and javascript will change in jsx.
// ex: class ---> className , for ---> htmlFor

// ? Rule 7:
// All elements should be closed.
// ex: <input type="text" /> or <input type="text"></input
/*
let App = () => {
  let sname = "Shivani";
  return (
    <>
      <h1>I am a Component</h1>
      <h1>I am {sname}</h1>
      <button onClick={() => confirm("Do you want to click")}> Click Here </button>
      <button
        onMouseOver={() => {
          console.log("you hover on this button");
        }}
      > Mouse Over </button>

      <form>
        <label htmlFor="">User Name:</label>
        <input type="text" name="" id="" /> <br /> <br />
        <label htmlFor="">User Email:</label>
        <input type="text"></input>
        <input type="text" />
        <br /> <br />
        <hr /> <hr />
        <section id="mainContainer">
          <div className="demo">item 1</div>
          <div className="demo">item 2</div>
          <div className="demo">item 3</div>
          <div className="demo">item 4</div>
        </section>
      </form>
    </>
  );
};
export default App;
*/

// ! ============= props =============
/*
Inshort we call properties as props.
props are used to share the data from one component to another component.
*/

// ? === Passing Props ===
/*
import ChildComponent from "./ChildComponent";
import ChildComponent from './ChildComponent';
let App = () => {
  console.log("I am App Component");

  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent sname="Shivani" age={20} course="React JS"></ChildComponent>
      <ChildComponent sname="Tanmay" age={22} course="Node JS"></ChildComponent>
      <ChildComponent sname="Ekash" age={23} course="All Courses"></ChildComponent>
      <ChildComponent sname="Nazme" age={22} course="No Courses"></ChildComponent>
    </>
  );
};
export default App;
*/

// ? ==== Props Children ====
// It is a way of sharing jsx elements from one component to another component.
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  console.log("I am App Component");

  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent name="Keshav">
        <h3>I am child -1</h3>
        <h3>I am child -2</h3>
        <h3>I am child -3</h3>
      </ChildComponent>
      <ChildComponent name="shubham">
        <h3>I am Child 2.1</h3>
        <h3>I am Child 2.2</h3>
        <h3>I am Child 2.3</h3>
      </ChildComponent>
    </>
  );
};
export default App;
*/

// ? === props Destructuring ===
//  Example 1:
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent name="Ekansh" age={20} course="React JS" />
      <ChildComponent name="Prabal" age={22} course="Node JS" />
      <ChildComponent name="Shivani" age={22} course="Express JS" />
    </>
  );
};
export default App;
*/

//  Example 2:
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  let sname = "Nazme";
  let course = "React JS";
  let isMarried = true;
  let kidsCount = null;
  let gender = "Male";

  let skills = {
    frontend: ["html", "css", "js", "Reactjs"],
    database: ["sql", "plsql", "mongodb"],
    backend: ["pythoooonnn", "jooovaaa", "jovaScript", "Djangoooooo"],
  };

  let hobbies = {
    dayTimeHobbies: {
      publicHobies: "Reading",
      privateHobies: "Snatching",
    },
    nightTimeHobbies: {
      parentKnows: "Marvals",
      parentDontKnows: "betting",
    },
  };

  let qualification = {
    matriculation: 85,
    intermediate: 82,
    graduation: 85,
  };

  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname={sname}
        course={course}
        isMarried={isMarried}
        kidsCount={kidsCount}
        gender={gender}
        skills={skills}
        hobbies={hobbies}
        qualification={qualification}
      />
    </>
  );
};
export default App;
*/

// ? ==== Default Props =====
/*
import ChildComponent from "./ChildComponent";

let App = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname="Amit"
        age={20}
        course="React JS"
        skills={["HTML", "CSS", "JS", "React JS", "Node JS"]}
        friend={{ fname: "Sumit", address: "Karol bagh", mobile: 7894562113 }}
      />

      <ChildComponent
        sname="Keshav"
        age={22}
        course="Node JS"
        skills={["HTML", "CSS", "JS", "React JS", "Node JS"]}
        friend={{
          fname: "Shubham",
          address: "Patel Nagar",
          mobile: 789456132861,
        }}
      />

      <ChildComponent sname="Ekansh" age={21} />
      <ChildComponent skills={["HTML", "CSS", "JS", "React JS", "Node JS"]} />
      <ChildComponent
        friend={{
          fname: "Shivani",
          address: "Uttam Nagar",
          mobile: 789456131,
        }}
      />
    </>
  );
};

export default App;
*/

// ? Pure JavaScript Data types
// Pure javascript data types we are unable to dispaly on the UI
// Allowed - string , number
// Not Allowed - boolean , undefined , null , array , object, date , function
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname="Prabal"
        age={24}
        isPlaced={false}
        companyName={undefined}
        salary={null}
        skills={["html", "css", "js", "reactjs", "mongodb"]}
        address={{ streetno: 123, colony: "patel nagar", pincode: 789456 }}
        dob={new Date("01 05 2000 10:50:50")}
        clickFn={() => {
          console.log("You clicked the function");
        }}
      />
    </>
  );
};
export default App;
*/

// ? ==== props drilling ====
/*
It is a process of sharing the data from one component to another component to another component and so on.

It is process of sharing b/w the components through multiple levels.
*/
/*
import ChildComponent from "./ChildComponent";
let App = () => {
  let myData = "https://www.qspiders.com/";

  let products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
  ];

  console.log("From App - ", products);

  return (
    <>
      <h1>I am App Component</h1>
      <h1>
        Link : <a href={myData}>Click Here</a>
      </h1>
      <ChildComponent data={myData} products={products} />
    </>
  );
};

export default App;
*/

// ? =========  prop types ==============

import ChildComponent from "./ChildComponent";
let App = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname={789553}
        age={20}
        course="MERN stack"
        skills="hello"
        address={{
          streetno: 123,
          colony: "patel nagar",
          pincode: 123456,
        }}
        isMarried={false}
      />
    </>
  );
};
export default App;
