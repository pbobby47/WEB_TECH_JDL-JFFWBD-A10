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

// ? ========= prop types ==============
/*
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
*/

// ! ======================= CSS =======================

// ? 1 . ===== INLINE CSS ======
/*
1. Inline css is similar to traditional inline css but the only difference is it accepts objects as a value.
2. css properties will follows lower camel case conventions.
*/

// & Case 1:
/*
let App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>
        I am App Component - Inline CSS
      </h1>
      <section
        style={{
          border: "2px solid",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "teal",
          color: "white",
        }}
      >
        <div style={{ border: "solid white", flex: 1, padding:"10px", textAlign:"center" }}>Home</div>
        <div style={{ border: "solid white", flex: 1, padding:"10px", textAlign:"center" }}>About</div>
        <div style={{ border: "solid white", flex: 1, padding:"10px", textAlign:"center" }}>Contact</div>
        <div style={{ border: "solid white", flex: 1, padding:"10px", textAlign:"center" }}>Services</div>
        <div style={{ border: "solid white", flex: 1, padding:"10px", textAlign:"center" }}>Login</div>
      </section>
    </>
  );
};

export default App;
*/

// & Case 2:
/*
let App = () => {
  let sectionStyles = {
    border: "2px solid",
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "teal",
    color: "white",
  };

  let divStyles = {
    border: "solid white",
    flex: 1,
    padding: "10px",
    textAlign: "center",
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>
        I am App Component - Inline CSS
      </h1>
      <section style={sectionStyles}>
        <div style={divStyles}>Home</div>
        <div style={divStyles}>About</div>
        <div style={divStyles}>Contact</div>
        <div style={divStyles}>Services</div>
        <div style={divStyles}>Login</div>
      </section>
    </>
  );
};

export default App;
*/

// ? ====== MODULE CSS ======
/*
1. we have to create a file like filename.module.css 
2. import into the component
3. for elements css properties will apply directly
    to assign id names / class names we have to use  variable name which we imported with.
*/
/*
import style from "./mycode.module.css";
let App = () => {
  console.log(style);
  return (
    <>
      <h1>I am App Component - Module CSS</h1>
      <section id={style.container}>
        <div className={style.items}>Home</div>
        <div className={style.items}>About</div>
        <div className={style.items}>Contact</div>
        <div className={style.items}>Services</div>
        <div className={style.items}>Login</div>
      </section>
    </>
  );
};
export default App;
*/

// ? ===== Global CSS ====
/*
let App = () => {
  return (
    <>
      <h1>I am App Component - Global CSS</h1>
      <section id="container">
        <div className="items">Home</div>
        <div className="items">About</div>
        <div className="items">Contact</div>
        <div className="items">Services</div>
        <div className="items">Login</div>
      </section>
    </>
  );
};
export default App;
*/

// ! ================ Task on Components , Props , CSS =================
/*
import assestsData from "./assests/assets";
import Product from "./ChildComponent";
import style from "./meeshoTask.module.css";

let App = () => {
  // console.log(assestsData);
  // console.log(assestsData.meeshoTask);
  // console.log(assestsData.meeshoTask.mensData);
  return (
    <>
      <h1 id={style.mainTitle}>Welcome to Meesho</h1>
      <Product
        category="Men's Collection"
        data={assestsData.meeshoTask.mensData}
      />

      <Product
        category="Women's Collection"
        data={assestsData.meeshoTask.womensData}
      />
    </>
  );
};

export default App;
*/

// ! ============== useState() Hook ======================
/*
It is an inbuilt hook provided by react Js.
It helps us to create dynamic data in a component
It helps to do the state management in a component
Syntax: let [variableName , updatefunction] = useSatate(intialvalue);
*/

// ? Example 1 : on Numbers
/*
import { useState } from "react";

let App = () => {
  // let count = 0; // static data

  let [count, setCount] = useState(0); // dynamic data

  console.log("Count Value -", count);
  return (
    <>
      <h1>I am App Component</h1>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount(10);
        }}
      >
        Update to 10
      </button>
      <button
        onClick={() => {
          setCount(20);
        }}
      >
        update to 20
      </button>
      <br /> <br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
export default App;
*/

// ? Example 1.1 : on Numbers
/*
import { useState } from "react";
let App = () => {
  let [a, b] = useState(0);
  return (
    <>
      <h1>I am App Component</h1>
      <h2>Count : {a}</h2>
      <button onClick={() => b(a + 1)}>Increment</button>
    </>
  );
};
export default App;
*/

// ? Example 1.2 : on Numbers
/*
import { useState } from "react";
let App = () => {
  // let count1 = 0;
  // let count2 = 0;

  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(10);

  return (
    <>
      <h1>I am App Component</h1>

      <h2>Counter : {count1}</h2>
      <button onClick={() => setCount1(count1 - 1)}>Decrement</button>
      <button onClick={() => setCount1(0)}>Reset</button>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>

      <h2>Counter : {count2}</h2>
      <button onClick={() => setCount2(count2 - 5)}>Decrement</button>
      <button onClick={() => setCount2(10)}>Reset</button>
      <button onClick={() => setCount2(count2 + 5)}>Increment</button>
    </>
  );
};
export default App;
*/

// ? Example 2 : on Strings
/*
import { useState } from "react";
let App = () => {
  let [name, setName] = useState("Ekansh");

  return (
    <>
      <h1>I am App Component</h1>
      <h2>Name : {name}</h2>
      <button onClick={() => setName("Ekansh")}>Short Name</button>
      <button onClick={() => setName("Ekansh Jana")}>Full Name</button>
    </>
  );
};
export default App;
*/

// ? Example 3: on boolean
/*
import { useState } from "react";
let App = () => {
  let [gender, setGender] = useState(false);

  // false ---> female
  // true ---> male
  return (
    <>
      <h1>I am App Component</h1>
      <h2>Gender : {gender ? "Male" : "Female"}</h2>
      <button onClick={() => setGender(true)}>Male</button>
      <button onClick={() => setGender(false)}>Female</button>
    </>
  );
};
export default App;
*/

// ? Example 4: on Arrays
/*
import { useState } from "react";
let App = () => {
  let [skills, setSkills] = useState([ "Python" ,"SQL","HTML","CSS","JavaScript","React JS"]);

  return (
    <>
      <h1>I am App Component</h1>
      <button
        onClick={() => {
          setSkills(["Python", "SQL", "HTML", "CSS", "JavaScript", "React JS"]);
        }}
      >
        Python
      </button>
      <button
        onClick={() => {
          setSkills([ "SQL", "HTML","CSS","JavaScript","React JS","springboot","hibernate" ,"java"]);
        }}
      >
        Java
      </button>
      <button
        onClick={() => {
          setSkills(["SQL","HTML","CSS","mongodb","JavaScript","React JS","node js","express" ]);
        }}
      >
        MERN
      </button>

      <h2>
        Skills :
        {skills.map((val, ind) => {
          return <li key={ind}>{val}</li>;
        })}
      </h2>
    </>
  );
};

export default App;
*/

// ? Example 4.1 : on Arrays
/*
import { useState } from "react";
let App = () => {
  let python = ["Python", "SQL", "HTML", "CSS", "JavaScript", "React JS"];

  let [skills, setSkills] = useState(python);

  let handlePython = () => {
    setSkills(python);
  };

  let handleJava = () => {
    setSkills(["java", "SQL", "WEB", "React JS", "springboot", "hibernate"]);
  };

  let handleMERN = () => {
    setSkills(["SQL", "WEB", "mongodb", "React JS", "node js", "express"]);
  };

  return (
    <>
      <h1>I am App Component</h1>
      <button onClick={handlePython}>Python</button>
      <button onClick={handleJava}>Java</button>
      <button onClick={handleMERN}>MERN</button>

      <h2>
        Skills :
        {skills.map((val, ind) => {
          return <li key={ind}>{val}</li>;
        })}
      </h2>
    </>
  );
};

export default App;
*/

// ? Example 5: Objects
/*
import { useState } from "react";

let App = () => {
  let student1 = { sname: "Amit", age: 20, course: "MERN" };
  let student2 = { sname: "Shubham", age: 21, course: "Python" };
  let student3 = { sname: "Nazme", age: 22, course: "Python" };
  let student4 = { sname: "Prabal", age: 23, course: "Java" };

  let [state, setState] = useState(student1);
  console.log(state);

  return (
    <>
      <h1>I am App Component</h1>
      <button onClick={() => setState(student1)}>Student 1</button>
      <button onClick={() => setState(student2)}>Student 2</button>
      <button onClick={() => setState(student3)}>Student 3</button>
      <button onClick={() => setState(student4)}>Student 4</button>
      <hr />
      <h2>Name : {state.sname}</h2>
      <h2>Age : {state.age}</h2>
      <h2>Course : {state.course}</h2>
    </>
  );
};

export default App;
*/

// ? Example 6:
/*
import { useState } from "react";
import assestsData from "./assests/assets";
import ChildComponent from "./ChildComponent";

let App = () => {
  console.log(assestsData.fakestoreapiTask.products);

  // let data = assestsData.fakestoreapiTask.products; // static data
  let products = assestsData.fakestoreapiTask.products;

  let [data, setData] = useState(products);

  let handleAllItems = () => {
    setData(products);
  };

  let handleMens = () => {
    let filteredMen = [];

    products.map((val, ind) => {
      if (val.category === "men's clothing") {
        filteredMen.push(val);
      }
    });

    setData(filteredMen);
  };

  let handleWomens = () => {
    let filterWomens = [];

    products.map((val, ind) => {
      if (val.category === "women's clothing") {
        filterWomens.push(val);
      }
    });

    setData(filterWomens);
  };

  let handlejewelery = () => {
    let filterJewellery = [];
    products.map((val, ind) => {
      if (val.category === "jewelery") {
        filterJewellery.push(val);
      }
    });
    setData(filterJewellery);
  };

  let handleElectronics = () => {
    let filterElectronics = [];
    products.map((val, ind) => {
      if (val.category === "electronics") {
        filterElectronics.push(val);
      }
    });
    setData(filterElectronics);
  };

  return (
    <>
      <h1>I am App Component</h1>
      <button onClick={handleAllItems}>All Items</button>
      <button onClick={handleMens}>Mens Collection</button>
      <button onClick={handleWomens}>Womens Collection</button>
      <button onClick={handlejewelery}>Jeweleries</button>
      <button onClick={handleElectronics}>Electronics</button>
      <hr />
      <ChildComponent products={data} />
    </>
  );
};

export default App;
*/

// ! ============== Context API ===============
/*
Steps:
    1. We have to create contextApi
          o createContext
    2. Provider
    3. Consumer / useContext() Hook

Context is a way to share data between components without having to pass props down to the component tree.

>>> Step 1: createContext:
import createContext from react.
use the createContext() method, This returns a context object that can be used to provide and consume values.

>>> Step 2: Provider:
Use <ContextName.Provider> </ContextName.Provider> Component.
In between wrap all the child components to which you want to send data.
Data can be transferred in value prop (Mandatory).
Now, the data can be consumed by wrapped components and its children , grandchildren and so on.

>>> Step 3: Consumer:
Use <ContextName.Consumer></ContextName.Consumer> Component.
This requires a function with a parameter as a child. Now, the data will store the parameter.
===== or =====
Use useContext()  Hook, It will directly consume the value.

*/
/*
import { createContext } from "react";
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";
import assestsData from "./assests/assets";

// ? Step 1:
export let MyContext = createContext();

let App = () => {
  let data = assestsData.fakestoreapiTask.products;
  return (
    <>
      <h1> I am App Component</h1>
       //? step 2: 
      <MyContext.Provider value={data}>
        <ChildComponentA />
        <ChildComponentB />
      </MyContext.Provider>
    </>
  );
};
export default App;
*/

// ! ============= contextAPI task ==========
/*
import React from "react";
import QspidersComponent from "./ContextAPI Task/QspidersComponent";

const App = () => {
  return (
    <div>
      <QspidersComponent />
    </div>
  );
};

export default App;
*/

// ! ====================== HOC =================
/*
import React from "react";
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

const App = () => {
  console.log("App Component");

  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponentA id="A101" />
      <ChildComponentB id="B202" />
    </>
  );
};

export default App;
*/

// ! ============= Counter Task using HOC ================
/*
import React, { useState } from "react";
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

const App = () => {
  return (
    <>
      <h1>I am App Component</h1>

      <ChildComponentA />
      <ChildComponentB />
    </>
  );
};

export default App;
*/

// ! ================ Conditional Rendering ===============
/*
1. if , if -else , else-if , switch

2. ternery operator

3. short circuit operator (Logical AND)
  Syntax:  condition && dataToDisplay

*/

// ?  ============= using if-else =============
/* 
1. if -else statement we should not use inside return statement
*/
/*
import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  console.log(counter);

  if (counter % 2 === 0) {
    return (
      <>
        <h1>I am App Component</h1>
        <h2>Counter : {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Udpate</button>
        <h2>Status : Even Number</h2>
      </>
    );
  } else {
    return (
      <>
        <h1>I am App Component</h1>
        <h2>Counter : {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Udpate</button>
        <h2>Status : Odd Number</h2>
      </>
    );
  }
};

export default App;
*/

// ? ============== using else if  ============
/*
import React, { useState } from "react";

const App = () => {
  let [number, setNumber] = useState(0);

  if (number % 2 === 0) {
    return (
      <>
        <h1>Number : {number}</h1>
        <button onClick={() => setNumber(number + 1)}>Udpate Number</button>
        <pre>Status : Number divisible by 2 </pre>
      </>
    );
  } else if (number % 3 === 0) {
    return (
      <>
        <h1>Number : {number}</h1>
        <button onClick={() => setNumber(number + 1)}>Udpate Number</button>
        <pre>Status : Number divisible by 3 </pre>
      </>
    );
  } else if (number % 4 === 0) {
    return (
      <>
        <h1>Number : {number}</h1>
        <button onClick={() => setNumber(number + 1)}>Udpate Number</button>
        <pre>Status : Number divisible by 4 </pre>
      </>
    );
  } else if (number % 5 === 0) {
    return (
      <>
        <h1>Number : {number}</h1>
        <button onClick={() => setNumber(number + 1)}>Udpate Number</button>
        <pre>Status : Number divisible by 5 </pre>
      </>
    );
  } else {
    return (
      <>
        <h1>Number : {number}</h1>
        <button onClick={() => setNumber(number + 1)}>Udpate Number</button>
        <pre>Status : Number divisible by 1 </pre>
      </>
    );
  }
};

export default App;
*/

// ? ============ Using Ternery Operator ============
/*
import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>I am App Component</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
      <h2>Status : {counter % 2 === 0 ? "Even" : "Odd"} Number</h2>
    </>
  );
};

export default App;
*/

// ? =========== Logical AND Operator =========
/*
import React, { useState } from "react";

const App = () => {
  let [status, setStatus] = useState(true);

  return (
    <>
      <h1>I am App Component</h1>

      <button onClick={() => setStatus(true)}>Placed</button>
      <button onClick={() => setStatus(false)}>Not Placed</button>
      <h2>Status: {status ? "Placed" : "Not Placed"} </h2>
      <h2>Status : {status && "Placed"}</h2>
    </>
  );
};

export default App;
*/

// ? Example 1:
/*
import React from "react";

const App = () => {
  let students = [
    { sname: "Ekansh", isPlaced: false },
    { sname: "Amit", isPlaced: true },
    { sname: "Shivani", isPlaced: true },
    { sname: "Mihir", isPlaced: true },
    { sname: "Megha", isPlaced: true },
    { sname: "Prabal", isPlaced: false },
    { sname: "Deepak", isPlaced: true },
    { sname: "Keshav", isPlaced: false },
    { sname: "Kanishka", isPlaced: true },
  ];

  return (
    <>
      <h1>Students Details</h1>
      {students.map((val, ind) => {
        console.log(val, ind);

        return (
          <p>
            {val.sname} {val.isPlaced ? "✅" : "✖️"}
          </p>
        );
      })}
    </>
  );
};

export default App;
*/
// ? Example 2:
/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>Welome to Ekansh Show</h1>

      <article>
        {toggle ? (
          <i
            className="fa-solid fa-toggle-on"
            onClick={() => setToggle(false)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-toggle-off"
            onClick={() => setToggle(true)}
          ></i>
        )}
      </article>

      <aside>
        <h4>
          <i class="fa-solid fa-house"></i>
          {toggle && <span>Home</span>}
        </h4>
        <h4>
          <i class="fa-solid fa-house"></i>
          {toggle ? <span>Home</span> : ""}
        </h4>
        <h4>
          <i class="fa-solid fa-house"></i>
          {toggle ? <span>Home</span> : ""}
        </h4>
        <h4>
          <i class="fa-solid fa-house"></i>
          {toggle ? <span>Home</span> : ""}
        </h4>
        <h4>
          <i class="fa-solid fa-house"></i>
          {toggle ? <span>Home</span> : ""}
        </h4>
      </aside>
    </>
  );
};

export default App;
*/

// ! ========================= Forms in React JS ===============
// ! ===================== UnControlled Forms =====================
// ? ============ useRef() Hook ==============
/*
To get the reference of an element we have to use useRef() Hook.
For reference of an element we have to use useRef() Hook.
    1. import useRef()
    2. store in a variable
    3. to pass reference we have to use "ref prop" and assgin the variable name.

Reference variable should be assigned to only one element.
If we repeat the variable name for multiple elements , it wil target the most updated element.
*/

// ? Example 1:
/*
import React from "react";
import { useRef } from "react";

const App = () => {
  let nameRef = useRef();
  // console.log(nameRef)

  let emailRef = useRef();
  let mobileRef = useRef();

  let handleSubmit = e => {
    e.preventDefault();

    // console.log(nameRef);
    // console.log(nameRef.current);
    // console.log(nameRef.current.value);

    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(mobileRef.current.value);
    console.log({
      userName: nameRef.current.value,
      userEmail: emailRef.current.value,
      userNo: mobileRef.current.value,
    });
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" ref={nameRef} /> <br /> <br />
        <label>Email :</label>
        <input type="text" ref={emailRef} /> <br /> <br />
        <label>Mobile :</label>
        <input type="text" ref={mobileRef} /> <br /> <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
*/

// ? Example 2:
// Sum of 3 numbers
/*
import React from "react";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  let [result, setResult] = useState("");

  let number1 = useRef();
  let number2 = useRef();
  let number3 = useRef();

  console.log(number1);
  console.log(number2);
  console.log(number3);

  let handleSubmit = e => {
    e.preventDefault();

    console.log(number1.current.value);
    console.log(typeof number1.current.value);
    console.log(number2.current.value);
    console.log(number3.current.value);

    console.log(Number(number1.current.value));
    console.log(number1.current.value * 1);
    console.log(+number1.current.value);
    console.log(typeof Number(number1.current.value));

    setResult(
      Number(number1.current.value) +
        Number(number2.current.value) +
        Number(number3.current.value)
    );

    //  +number1.current.value + +number2.current.value + +number3.current.value;
    //  number1.current.value*1 + number2.current.value*1 + number3.current.value*1;
  };

  return (
    <>
      <h1>Addition Form</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Number 1 : </label>
          <input type="tel" ref={number1} />
        </p>

        <p>
          <label>Number 2 : </label>
          <input type="tel" ref={number2} />
        </p>

        <p>
          <label>Number 3 : </label>
          <input type="tel" ref={number3} />
        </p>

        <p>
          <button>submit</button>
        </p>
      </form>

      {result && <h2>Output is : {result}</h2>}
    </>
  );
};

export default App;
*/

// ! ===================== Controlled Forms =====================
/*
    1. useState( ) Hook
    2. value prop
    3. readOnly / onChange Event

Note: 
  You provided a `value` prop to a form field without an `onChange` handler.
  This will render a read-only field. 
*/
// ? Example 1:
/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [name, setName] = useState("Amit");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  return (
    <>
      <h1>Registration Form</h1>
      <form action="">
        <p>
          <label>Name : </label>
          <input
            type="text"
            value={name}
            onChange={e => {
              // console.log("I am changing...");
              // console.log(e);
              // console.log(e.target);
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Email : </label>
          <input type="text" value={email}  onChange={e => {
              setEmail(e.target.value);
            }} />
        </p>
        <p>
          <label>Mobile No : </label>
          <input type="text" value={mobile}
            onChange={e => setMobile(e.target.value)} />
        </p>
        <p>
          <button>submit</button>
        </p>
      </form>
    </>
  );
};

export default App;
*/

// ? Example 2:
/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [number1, setNumber1] = useState("");
  let [number2, setNumber2] = useState("");
  let [number3, setNumber3] = useState("");
  let [result, setResult] = useState("");

  let handleSubmit = e => {
    e.preventDefault();

    let sum = Number(number1) + number2 * 1 + +number3;
    setResult(sum);
  };

  return (
    <>
      <h1>Addition of 3 Numbers</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Number 1 : </label>
          <input
            type="text"
            value={number1}
            onChange={e => {
              setNumber1(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Number 2 : </label>
          <input
            type="text"
            value={number2}
            onChange={e => {
              setNumber2(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Number 3 : </label>
          <input
            type="text"
            value={number3}
            onChange={e => {
              setNumber3(e.target.value);
            }}
          />
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>

      {result && <h1>Output: {result}</h1>}
    </>
  );
};

export default App;
*/

// ? Example 3:
/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [formData, setFormData] = useState({
    sname: "Amit",
    email: "a@gmail.com",
    mobile: "9876541230",
  });

  // console.log(formData);

  let handleName = e => {
    // console.log("I am changing Name");
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.value);

    setFormData({
      ...formData,
      sname: e.target.value,
    });
  };

  let handleEmail = e => {
    // console.log("I am changing Email");
    console.log(e.target.value);

    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  let handleMobile = e => {
    // console.log("I am changing Mobile No");
    console.log(e.target.value);

    setFormData({
      ...formData,
      mobile: e.target.value,
    });
  };

  let handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData);
  };

  return (
    <>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Name : </label>
          <input type="text" value={formData.sname} onChange={handleName} />
        </p>

        <p>
          <label>Email : </label>
          <input type="text" value={formData.email} onChange={handleEmail} />
        </p>

        <p>
          <label>Mobile No : </label>
          <input type="text" value={formData.mobile} onChange={handleMobile} />
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </>
  );
};

export default App;
*/

// ? Example 3.1:
/*
import React from "react";
import { useState } from "react";

const App = () => {
  let [formData, setFormData] = useState({
    sname: "",
    email: "",
    mobile: "",
  });

  let handleChange = e => {
    // console.log("I am changing input");
    // console.log(e);
    // console.log(e.target);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    console.log(formData);
  };

  let handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formData);
  };

  return (
    <>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Name : </label>
          <input
            type="text"
            name="sname"
            value={formData.sname}
            onChange={handleChange}
          />
        </p>

        <p>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </p>

        <p>
          <label>Mobile No : </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </>
  );
};

export default App;
*/

// ! =============== Life Cycle Methods of a Component =================

// ? Example 1:
/*
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props); // Must call super constructor in derived class before accessing 'this' or returning from derived constructor

    this.state = {
      counter: 0,
    };

    console.log(this); // current Component
    console.log(this.state);
    console.log(this["state"]);
  }

  render() {
    console.log("I am Class based App Component");

    return (
      <>
        <h1>I am App Component</h1>
        <h2>Count : {this.state.counter}</h2>
        <button>Decrement</button>
        <button>Reset</button>
        <button
          onClick={() => {
            console.log("Increment button clicked...");
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Increment
        </button>
      </>
    );
  }
}
export default App;
*/

// ? Example 2:
/*
import React from "react";

class App extends React.Component {
  constructor(props) {
    console.log("I am constructor method");
    super(props);

    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
    };
  }

  render() {
    console.log("I am render method");

    return (
      <center>
        <h1>I am App Component</h1>
        <h2>Counter1 : {this.state.counter1}</h2>
        <button onClick={()=> this.setState({ ...this.state,  counter1: this.state.counter1 - 1})}>Decrement</button>
        <button onClick={()=> this.setState({ ...this.state, counter1: 0})}>Reset</button>
        <button onClick={() => this.setState({...this.state, counter1: this.state.counter1 + 1 })}>Increment</button>
        
        <h2>Counter2 : {this.state.counter2}</h2>
        <button onClick={()=> this.setState({counter2: this.state.counter2 - 1})}>Decrement</button>
        <button onClick={()=> this.setState({counter2: 0})}>Reset</button>
        <button onClick={() => this.setState({ counter2: this.state.counter2 + 1 })}>Increment</button>
        
        <h2>Counter3 : {this.state.counter3}</h2>
        <button onClick={()=> this.setState({counter3: this.state.counter3 - 1})}>Decrement</button>
        <button onClick={()=> this.setState({counter3: 0})}>Reset</button>
        <button onClick={()=> this.setState({counter3: this.state.counter3 + 1})}>Increment</button>
      </center>
    );

  }
}
export default App;
*/

// ! ================ Mounting Phase =====================
/*
  Whenever a component is created and inserted into the DOM is called Mounting Phase.
  ? 1. Constructor()
    a. It is the first method to be called in Mounting Phase
    b. This method will execute only once after the component Mounted.
    c. It is the best place to do initializations.
    d. To use "this" keyword,
        i. firstly, we have to extend the features of React.Component
        ii. we have to pass props as parameter to constructor method
        iii. we must use super call.
        iv. "this" keyword will points to the current component.
    e. By default CBC contains state data. 
    f. To create state data, this.state = object;
    g. To udpate the state data, this.setState(new state obj)

  ? 2. getDerivedStateFromProps():
    a. getDerivedStateFromProps() method should be static.
    b. It will execute just before the render() method.
    c. It will return the new state data. 
    d. it accepts prev props, prevsate as a paramters.
    e. It must and should return a valid state object / null.

  ? 3. render()
    a. It is the only mandatory method in CBC's,
    b. It will execute for each and every updates.
    c. render() method allows us to write JSX(html + js);
    d. It is not the best place to do side effects
    e. side effects means the things which are not in react
        ex: fetch , timers, window properties, etc.
  
  ? 4. componentDidMount():
    a. componentDidMount() method will work only once after the component is mounted.
    b. This is the best place to perform side effects
    c. prefered to make GET requests here.
*/
/*
import React from "react";
class App extends React.Component {
  constructor(props) {
    console.log("I am constructor() method");
    super(props);

    this.state = { counter: 0 };
    console.log(this.state);
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    console.log("I am getDerivedStateFromProps() method");

    // return newStateValue;
    console.log(prevState);
    // return { counter: 50 };
    return null;
  }

  componentDidMount() {
    console.log("I a componentDidMount() Method");

    let getData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };

    getData();
  }

  render() {
    console.log("I am render() method");
    console.log(this.state);

    return (
      <>
        <h1>I am App Component</h1>
        <h2>Counter : {this.state.counter}</h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Update
        </button>
      </>
    );
  }
}

export default App;
*/

// ! ================ Updating Phase =====================
/*
  Whenever there some changes in component, react will re -render the component and this phase is called updating phase.
  changes in props, state.

  ? 1. getDerivedStateFromProps():
    This method is as same in Mouting Phase.
    This method will execute just before the render method.
    It will provide the static state data.
    It will return a new object as state data. 

  ? 2. shouldComponentUpdate():
      This method helps us to improve the performance of an application.
      It will compare the previous props/states with current props/states. 
      It will return a boolean value.
      If true, render() method will execute
      If false, render() method will not execute
      By default the value is true.
      Called to determine whether the change in props and state should trigger a re-render.
      Component always returns true. 
      PureComponent implements a shallow comparison on props and state and returns true if any props or states have changed.
      If false is returned, Component.render, componentWillUpdate and componentDidUpdate will not be called.

  ? 3. render():
      As same in mounting phase

  ? 4. getSnapShotBeforeUpdate():
      This method will start working just before the render() method.
      Through out the render method it will observe the changes and it will send the changes to componentDidUpdate() method
      getSnapshotBeforeUpdate() should be used with componentDidUpdate().
      This component defines getSnapshotBeforeUpdate() only.
      App.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned.

  ? 5. componentDidUpdate():
      This will get the snapshot data from getSnapShotBeforeUpdate() method.
      This is the best place to perform side effects.
      specificly like: PUT, PATCH methods.
*/
/*
import React from "react";
class App extends React.Component {
  constructor(props) {
    console.log("I am constructor() method");
    super(props);

    this.state = { counter: 0 };
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    console.log("I am getDerivedStateFromProps() method");

    return null;
  }

  shouldComponentUpdate(prevProps, prevStates) {
    console.log("I am shouldComponentUpdate() method");
    // console.log(prevProps, prevStates);

    // if previous states/props = current states/props
    // return false;

    // if previous states/props != current states/props
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("I am getSnapshotBeforeUpdate() Method");

    // return null;
    return prevState;
  }

  componentDidUpdate(props, state, snapshot) {
    console.log("I am componentDidUpdate() method");
    console.log("My snap data is -", snapshot);
  }

  componentDidMount() {
    console.log("I a componentDidMount() Method");

    let getData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      // console.log(data);
    };

    getData();
  }

  render() {
    console.log("I am render() method");

    return (
      <>
        <h1>I am App Component</h1>
        <h2>Counter : {this.state.counter}</h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Update
        </button>
      </>
    );
  }
}

export default App;
*/

// ! ================ UnMounting Phase =====================
/*
  Whenever the component is removed the from the DOM is called unMounting Phase.
*/

// ? Example 1:
/*
import React from "react";
class App extends React.Component {
  constructor(props) {
    console.log("I am constructor() method");
    super(props);

    this.state = { counter: 0 };
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    console.log("I am getDerivedStateFromProps() method");

    return null;
  }

  shouldComponentUpdate(prevProps, prevStates) {
    console.log("I am shouldComponentUpdate() method");
    // console.log(prevProps, prevStates);

    // if previous states/props = current states/props
    // return false;

    // if previous states/props != current states/props
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("I am getSnapshotBeforeUpdate() Method");

    // return null;
    return prevState;
  }

  componentDidUpdate(props, state, snapshot) {
    console.log("I am componentDidUpdate() method");
    console.log("My snap data is -", snapshot);
  }

  componentDidMount() {
    console.log("I a componentDidMount() Method");

    let getData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      // console.log(data);
    };

    getData();
  }

  componentWillUnmount() {
    console.log("I am componentWillUnmount() method");
  }

  render() {
    console.log("I am render() method");

    return (
      <>
        <h1>I am App Component</h1>
        <h2>Counter : {this.state.counter}</h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Update
        </button>
      </>
    );
  }
}

export default App;
*/

// ? Example 2:
/*
import React from "react";
import ChildComponent from "./ChildComponent";
class App extends React.Component {
  constructor(props) {
    console.log("I am constructor() method");
    super(props);

    this.state = { counter: 0, isDisplay: true };
  }

  render() {
    console.log("I am render() method - App Component");

    return (
      <>
        <h1>I am App Component</h1>
        <h2>Counter : {this.state.counter}</h2>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })} >  Update  </button>
        <br /> <br />
        <button onClick={() => this.setState({ isDisplay: !this.state.isDisplay })} > Toggle </button>
        {this.state.isDisplay ? <ChildComponent /> : null}
      </>
    );
  }
}

export default App;
*/

// ! ============================ useEffect() Hook =====================
/*
1. useEffect() is a hook in react which helps to peerform side effects.
2. useEffect() is an alternative to componentDidMount() , componentDidUpdate() and componentWillUnMount() methods of class based components.
*/
/*
import React, { useState } from "react";
import { useEffect } from "react";
import ChildComponent from "./ChildComponent";

const App = () => {
  // console.log("I am App Component");
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);
  let [isDisplay, setDisplay] = useState(true);

  // ? Case 1:
  // useEffect Hook without dependecny array will work for every changes.
  useEffect(() => {
    console.log("I am useEffect() Hook");
    let getData = async () => {
      console.log("I am fetching Data.....");
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  });

  // ? Case 2:
  // useEffect Hook with dependency array will work only once.
  // It will act as componentDidMount() method.
  useEffect(() => {
    console.log("I am useEffect() Hook working as componentDidMount() method.");
    let getData = async () => {
      console.log("I am fetching Data.....");
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  }, []);

  // ? Case 3:
  // useEffect Hook with dependency array including state variables will work only after the state variable data changed.
  // It will act as componentDidUpdate() method.
  useEffect(() => {
    console.log(
      "I am useEffect() Hook working as componentDidUpdate() method."
    );
    console.log("Heyy, Counter 1 changed");

    let getData = async () => {
      console.log("I am fetching Data.....");
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  }, [counter1]);

  useEffect(() => {
    console.log("Heyy, Counter 2 changed");
    let getData = async () => {
      console.log("I am fetching Data.....");
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    };
    getData();
  }, [counter2]);

  useEffect(() => {
    console.log("You haved changes either counter1 or counter2");
    console.log({
      counter1Value: counter1,
      counter2Value: counter2,
    });
  }, [counter1, counter2]);

  return (
    <>
      <h1>I am useEffect() Hook</h1>
      <h2>Counter1 : {counter1}</h2>
      <h2>Counter2 : {counter2}</h2>
      <button onClick={() => setCounter1(counter1 + 1)}>
        Update Counter 1
      </button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Update Counter 2
      </button>
      <hr />
      <button onClick={() => setDisplay(!isDisplay)}>Toggle</button>

      {isDisplay && <ChildComponent />}
    </>
  );
};

export default App;
*/

// ! ================= useEffect() Hook with fetch API ============
/*
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  let [data, setData] = useState([]);

  let getData = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>I am FakeStore API</h1>

      {data.map((val, ind) => {
        console.log(ind, "---", val);
      })}
    </>
  );
};

export default App;
*/

// ! ================= useEffect() Hook with axios ============
/*
? Step 1: 
  npm install axios
  npm i axios

? step 2:
  import variableName from axios

? step 3:
  API requests:
    GET --> It will get the data.
    POST --> It will send the data. 
    PUT --> It will update the data.
    PATCH --> It will udpate the data partially. 
    DELETE --> It will delete the data.

? step 4:
working:
  GET:
    variablename.get("path address");

  POST:
    variablename.post("path address" , payload);

  PUT:
    variablename.put("path address / {id}" , payload);

  PATCH:
    variablename.patch("path address / {id}" , payload);

  DELETE:
    variablename.delete"path address / {id}");
*/
/*
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    // ? Promises
    // console.log(axios.get("https://fakestoreapi.com/products"));
    // axios.get("https://fakestoreapi.com/products").then(res => {
    //   console.log(res);
    //   console.log(res.data);
    //   setProducts(res.data);
    // });

    //? Async Await
    let getData = async () => {
      let { data } = await axios.get("https://fakestoreapi.com/products"); // direct destructuring without storing in a varible.

      setProducts(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1>I am Axios</h1>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products List
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map(product => (
              <div key={product.id} className="group relative">
                <img
                  src={product.image}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a
                        href={`https://fakestoreapi.com/products/${product.id}`}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
*/

// ! =============== Portals / Models  ===================
/*
1. Portals allows us to display  data on the UI and withour rendering into root element.
2. How to Use:
  Step 1: 
      create one more element in the main html file
      use id and target it.

  step 2: 
      import ReactDOM from "react-dom";

      ReactDOM.createPortal( content , container );
      Ex: ReactDOM.createPortal( <h1>I am h1 tag</h1> ,  document.getElementById("portal"));
*/

// ? Case 1:
/*
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  let [isOpen1, setOpen1] = useState(false);
  let [isOpen2, setOpen2] = useState(false);

  return (
    <>
      <h1>I am App Component</h1>
      <section style={{ border: "solid" }}>
        <h2>Without Portal</h2>

        {isOpen1 ? (
          <h1>
            I am display without Portal
            <button onClick={() => setOpen1(false)}>✖️</button>
          </h1>
        ) : null}
        <button onClick={() => setOpen1(true)}>Open 1</button>
      </section>

      <section style={{ border: "solid" }}>
        <h2>With Portal</h2>

        {isOpen2
          ? ReactDOM.createPortal(
              <h1>
                I am display with Portal
                <button onClick={() => setOpen2(false)}>✖️</button>
              </h1>,
              document.getElementById("portal")
            )
          : null}
        <button onClick={() => setOpen2(true)}>Open 2</button>
      </section>
    </>
  );
};

export default App;
*/

// ? Case 2:
/*
import React, { useState } from "react";
import NonPortalComponent from "./portals/NonPortalComponent";
import PortalComponent from "./portals/PortalComponent";

const App = () => {
  let [isOpen1, setOpen1] = useState(false);
  let [isOpen2, setOpen2] = useState(false);

  return (
    <>
      <h1>Without Portal</h1>
      <section style={{ border: "solid" }}>
        {isOpen1 && <NonPortalComponent />}
        <button onClick={() => setOpen1(true)}>
          Open Non Portal Component
        </button>
      </section>
      <h1>With Portal</h1>
      <section style={{ border: "solid" }}>
        {isOpen2 && <PortalComponent closeFn={() => setOpen2(false)} />}
        <button onClick={() => setOpen2(true)}>
          Open Portal Component
        </button>
      </section>
    </>
  );
};

export default App;
*/

// ! =============== Pure Components =============
/*
import React from "react";
import PureParent from "./PureComponents/PureParent";

const App = () => {
  return (
    <>
      <PureParent />
    </>
  );
};

export default App;
*/

// ! ========== useCallback() ==============
/*
It will helps us to add additional features to React.memo 
? When to use:
  whenever we are passing functions as props we have to use it.

? How to use: 
  Syntax: useCallback( function, [dependencies])

? Working:
1. It will stop the recreation of functions unless the dependency changed.
2. as there is not recreation of function, function  reference will not change, as function reference not changed it props are not changed, as props not changed it will not re-render the component.
*/
/*
import React, { useCallback, useState } from "react";
import TitleComponent from "./TitleComponent";
import CounterComponent from "./CounterComponent";
import ButtonComponent from "./ButtonComponent";

const App = () => {
  let [age, setAge] = useState(20);
  let [salary, setSalary] = useState(50000);

  let handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  let handleSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  return (
    <center>
      <TitleComponent>useCallback() Hook</TitleComponent>

      <CounterComponent data={age}>Age</CounterComponent>
      <ButtonComponent fn={handleAge}>Update Age</ButtonComponent>

      <CounterComponent data={salary}>Salary</CounterComponent>
      <ButtonComponent fn={handleSalary}>Update Salary</ButtonComponent>
    </center>
  );
};

export default App;
*/

// ! ============== useMemo() Hook ==========
/*
  To handle heavy functions in React Component we have to use useMemo() Hook.
*/
/*
import React, { useMemo, useState } from "react";

const App = () => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  // ? Syntax: useMemo(callback , [dependency]);
  let isEven = useMemo(() => {
    console.log("isEven() is working");

    let sum = 0;
    for (let i = 0; i <= 300000000; i++) {
      sum += i;
    }
    console.log(sum);

    // if (counter1 % 2 === 0) {
    //   return true;
    // }
    // return false;

    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <>
      <h1>I am App Component</h1>
      <h2>Counter 1 : {counter1}</h2>
      <button onClick={() => setCounter1(counter1 + 1)}>Update Counter1</button>

      {isEven ? "Even" : "Odd"}

      <h2>Counter 2 : {counter2}</h2>
      <button onClick={() => setCounter2(counter2 + 1)}>Update Counter2</button>
    </>
  );
};

export default App;
*/

// ! ================= React - Routing (version 5) =================
/*
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav id="mainNavBar">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
*/

// ! ================= React - Nested Routing (version 5) =================
/*
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Company from "./pages/aboutpages/Company";
import Employess from "./pages/aboutpages/Employess";
import Users from "./pages/aboutpages/Users";
import ContactHR from "./pages/contactpages/ContactHR";
import ContactTrainer from "./pages/contactpages/ContactTrainer";
import ContactCounsellor from "./pages/contactpages/ContactCounsellor";
import Dashboard from "./pages/Dashboard";
import HandleErrors from "./pages/HandleErrors";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="company" element={<Company />} />
              <Route path="employees" element={<Employess />} />
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="/contact" element={<Contact />}>
              <Route path="hrs" element={<ContactHR />} />
              <Route path="trainers" element={<ContactTrainer />} />
              <Route path="counsellors" element={<ContactCounsellor />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<HandleErrors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
*/

// ! ============== React Routing (v6) ==============
/*
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;


*/

// ! ============== React - Nested Routing (V6) =============
/*
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HandleErrors from "./pages/HandleErrors";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Login from './pages/Login';

import Company from "./pages/aboutpages/Company";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
          children: [
            {
              path: "company",
              element: <Company />,
            },
            {
              path: "company",
              element: <Company />,
            },
            {
              path: "company",
              element: <Company />,
            },
          ],
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "*",
      element: <HandleErrors />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
*/

// ! ============ Error Boundaries ============
// ? Example 1:
/*
import React from "react";
import Cart from "./error boundaries/Cart";
import CartTwo from "./error boundaries/CartTwo";

const App = () => {
  return (
    <>
      <section style={{ border: "solid red", height: "500px", width: "800px" }}>
        <Cart />
        <CartTwo />
      </section>
    </>
  );
};

export default App;
*/

// ? Example 2:
// Based on Capgemini hirings

// ? Example 3:
// loading, success, error
/*
import React from "react";
import Status from "./error boundaries/Status";

const App = () => {
  return (
    <>
      <Status status="Loading" />
      <Status status="Success" />
      <Status status="error" />
      <Status status="Pending" />
      <Status status="Completed" />
      <Status status="Failure" />
      <Status status="doing" />
    </>
  );
};

export default App;
*/

// ! ============================ Custom Hooks ==========================
// ? Example 1:
/*
import React from "react";
import { useState } from "react";
import useGreetList from "./custom hooks/useGreetList";
import useGreet from "./custom hooks/useGreet";

const App = () => {
  console.log("I am App Component");

  let greetInfo = useGreet();
  console.log(greetInfo);

  let user1 = useGreetList("Amit");
  let user2 = useGreetList("Deepak");
  let user3 = useGreetList("Ekansh");
  let user4 = useGreetList("Megha");

  console.log(user1);
  console.log(user2);
  console.log(user3);
  console.log(user4);

  return <h3>Greet Info - {greetInfo}</h3>;
};

export default App;
*/

// ? Example 2:
/*
import React from "react";
import useGreetList from "./custom hooks/useGreetList";

const App = () => {
  let mylist = ["Amit", "Tanmay", "Shivani", "Megha", "Gyandeep"];
  let recievedData = useGreetList(mylist);
  console.log(recievedData);
  return (
    <>
      <h1>I am App Component</h1>
      {recievedData.map((val, ind) => {
        return <h2 key={ind}>{val}</h2>;
      })}
    </>
  );
};

export default App;
*/

// ? Example 3:
/*
import React from "react";
import useCalculator from "./custom hooks/useCalculator";

const App = () => {
  let calOne = useCalculator(10, 20);
  let calTwo = useCalculator(30, 40);

  console.log(calOne);
  console.log(calTwo);

  return (
    <>
      <h1>Result component</h1>

      <hr />
      <h2>Calculation One</h2>
      <p>
        Input One : {calOne.inputOne} and Input Two : {calOne.inputTwo}
      </p>
      <p>Addition : {calOne.addition}</p>
      <p>Subtraction : {calOne.subtraction}</p>
      <p>Multiplication : {calOne.multiplication}</p>
      <p>Division : {calOne.divison}</p>

      <hr />
      <h2>Calculation Two</h2>
      <p>
        Input One : {calTwo.inputOne} and Input Two : {calTwo.inputTwo}
      </p>
      <p>Addition : {calTwo.addition}</p>
      <p>Subtraction : {calTwo.subtraction}</p>
      <p>Multiplication : {calTwo.multiplication}</p>
      <p>Division : {calTwo.divison}</p>
    </>
  );
};

export default App;
*/

// ? Example 4:
/*
import React, { useEffect } from "react";
import useFetch from "./custom hooks/useFetch";

const App = () => {
  let data = useFetch("https://fakestoreapi.com/products");
  console.log(data);

  let data2 = useFetch("https://fakestoreapi.com/users");
  console.log(data2);

  return (
    <>
      <h1>I am using fakestoreapi </h1>
    </>
  );
};

export default App;
*/

// ? Example 5:
/*
import React from "react";
import StatusBar from "./custom hooks/useStatus";

const App = () => {
  let status = StatusBar();
  console.log(status);

  return <h1>{status ? "✅ Online" : "❌ Disconnected"}</h1>;
};

export default App;
*/

// ! =========================== React Toast ================================
/*
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  let handleSuccess = () => {
    // write your logic here

    // alert("You Have loggeed succesfully!!!");
    toast("Wow so easy!");
  };

  return (
    <>
      <h1>We are learning React Toast</h1>
      <p>
        Benefit of this is , we create a beatufil pop up message / notifications
      </p>
      <button onClick={handleSuccess}>Success</button>

      <ToastContainer position="top-left" />
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
*/

// ! ================= Shimmer UI / Shimmer Effects =================
/*
import React, { useEffect, useState } from "react";
import ShimmerCard from "./shimmer UI/ShimmerCard";
import Products from "./shimmer UI/Products";
import axios from "axios";

const App = () => {
  let [isLoading, setLoading] = useState(true);
  let [data, setData] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setData(data);

      setLoading(false);
    };

    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  return (
    <>
      <h1>We are learning Shimmer UI </h1>
      <p>
        It will improve the user experience by displaying some dummy component
        instead of actual component
      </p>

      {isLoading ? <ShimmerCard /> : <Products title="Products" data={data} />}
    </>
  );
};

export default App;
*/

// ! ============== Lazy Loading ===================
// ? without lazy loading:
/*
import React from "react";
import { useState } from "react";
import ProductsComponent from "./Lazy Loading/ProductsComponent";
import UserComponent from "./Lazy Loading/UserComponent";

const App = () => {
  const [state, setstate] = useState(true);

  return (
    <>
      <h1>I am App Component</h1>

      {state ? <ProductsComponent /> : <UserComponent />}
    </>
  );
};

export default App;
*/

// ? with lazy loading:
/*
import React from "react";
import { useState } from "react";
// import ProductsComponent from "./Lazy Loading/ProductsComponent";
// import UserComponent from "./Lazy Loading/UserComponent";
import LoadingSkeleton from "./Lazy Loading/LoadingSkeleton";

// ~ Dynamic loading
let ProductsComponent = React.lazy(() =>
  import("./Lazy Loading/ProductsComponent")
);

let UserComponent = React.lazy(() => import("./Lazy Loading/UserComponent"));

const App = () => {
  const [state, setstate] = useState(false);

  return (
    <>
      <h1>I am App Component</h1>

      <button onClick={() => setstate(true)}>Render Products</button>
      <button onClick={() => setstate(false)}>Render Users</button>

      {state ? (
        <React.Suspense fallback={<LoadingSkeleton />}>
          <ProductsComponent />
        </React.Suspense>
      ) : (
        <UserComponent />
      )}
    </>
  );
};

export default App;
*/

// ? Example 2:
// using Routing version 6
/*
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home";
let Home = lazy(() => import("./pages/Home"));

// import About from "./pages/About";
let About = lazy(() => import("./pages/About"));

// import Contact from "./pages/Contact";
let Contact = lazy(() => import("./pages/Contact"));

// import Login from "./pages/Login";
let Login = lazy(() => import("./pages/Login"));

import { NavLink } from "react-router-dom";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback="Home Component is Rendering">
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/about",
      element: (
        <Suspense fallback="About Component is Rendering">
          <About />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense fallback="Contact Component is Rendering">
          <Contact />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback="Login Component is Rendering">
          <Login />
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <h1>I am App Component</h1>

      <RouterProvider router={router} />
    </>
  );
};

export default App;
*/

// ? Example 3:
// It's Task do using Routing version 5

// ! =================== useReducer() Hook ===================
// ? Example 1:
/*
import React from "react";
import { useReducer } from "react";

const App = () => {
  let initialValue = 0;

  let reducer = (currentState, action) => {
    console.log("currenstate is : ", currentState);
    console.log("action is: ", action);

    if (action === "increment") {
      return currentState + 1;
    } else if (action === "decrement") {
      return currentState - 1;
    } else if (action === "reset") {
      return initialValue;
    } else {
      return currentState;
    }
  };

  let [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h1>I am using useReducer() Hook</h1>

      <p>useReducer() Hook is an alternative to useState() Hook.</p>
      <p>useState -- for simple state logic</p>
      <p>useReducer -- for complex state logic</p>

      <h2>Count : {count}</h2>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("increment")}>Increment</button>
    </>
  );
};

export default App;
*/

// ? Example 2:
// using switch case in reducer function.
/*
import React from "react";
import { useReducer } from "react";

const App = () => {
  let initialValue = 0;

  let reducer = (currentState, action) => {
    console.log("currenstate is : ", currentState);
    console.log("action is: ", action);

    switch (action) {
      case "increment":
        return currentState + 1;
      case "decrement":
        return currentState - 1;
      case "reset":
        return initialValue;
      default:
        return currentState;
    }
  };

  let [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h1>I am using useReducer() Hook</h1>

      <p>useReducer() Hook is an alternative to useState() Hook.</p>
      <p>useState -- for simple state logic</p>
      <p>useReducer -- for complex state logic</p>

      <h2>Count : {count}</h2>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("update")}>wrong button</button>
    </>
  );
};

export default App;
*/

// ? Example 3:
// passing object as parameter.
/*
import React from "react";
import { useReducer } from "react";

const App = () => {
  let initialValue = 0;

  let reducer = (currentState, action) => {
    console.log("currenstate is : ", currentState);
    console.log("action is: ", action);

    switch (action.type) {
      case "increment":
        return currentState + 1;
      case "decrement":
        return currentState - 1;
      case "reset":
        return initialValue;
      default:
        return currentState;
    }
  };

  let [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h1>I am using useReducer() Hook</h1>

      <p>useReducer() Hook is an alternative to useState() Hook.</p>
      <p>useState -- for simple state logic</p>
      <p>useReducer -- for complex state logic</p>

      <h2>Count : {count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </>
  );
};

export default App;
*/

// ? Example 4:
/*
  increment --- 1, 5, 10
  reset 
  decrement --- 1, 5, 10
*/
/*
import React from "react";
import { useReducer } from "react";

const App = () => {
  let initialValue = 0;

  let reducer = (currentState, action) => {
    console.log("currenstate is : ", currentState);
    console.log("action is: ", action);

    switch (action.type) {
      case "increment":
        return currentState + action.number;
      case "decrement":
        return currentState - action.number;
      case "reset":
        return initialValue;
      default:
        return currentState;
    }
  };

  let [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <center>
      <h1>I am using useReducer() Hook</h1>


      <h2>Count : {count}</h2>
      <button onClick={()=> dispatch({type:"decrement" , number: 10})}>Decrememt 10</button>
      <button onClick={()=> dispatch({type:"decrement" , number: 5})}>Decrememt 5</button>
      <button onClick={()=> dispatch({type:"decrement" , number: 1})}>Decrememt 1</button>
      <br /> <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br /> <br />
      <button onClick={()=> dispatch({type:"increment" , number: 1})}>Incrememt 1</button>
      <button onClick={()=> dispatch({type:"increment" , number: 5})}>Incrememt 5</button>
      <button onClick={()=> dispatch({type:"increment" , number: 10})}>Incrememt 10</button>
    </center>
  );
};

export default App;
*/

// ? Example 5:
/*
import React from "react";
import { useReducer } from "react";

let initialState = {
  counterOne: 0,
  counterTwo: 0,
};

let reducer = (currentState, action) => {
  console.log("action is : ", action);
  switch (action.type) {
    case "decrement1":
      return { ...currentState, counterOne: currentState.counterOne - 1 };
    case "increment1":
      return { ...currentState, counterOne: currentState.counterOne + 1 };
    case "reset1":
      return { ...currentState, counterOne: initialState.counterOne };
    case "decrement2":
      return { ...currentState, counterTwo: currentState.counterTwo - 1 };
    case "increment2":
      return { ...currentState, counterTwo: currentState.counterTwo + 1 };
    case "reset2":
      return { ...currentState, counterTwo: initialState.counterTwo };
    default:
      currentState;
  }
};

const App = () => {
  let [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <center>
      <h1>useReducer() Example 5</h1>
      <h2>Counter One : {counter.counterOne}</h2>
      <button onClick={() => dispatch({ type: "decrement1" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset1" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment1" })}>
        Increment
      </button>

      <h2>Counter Two : {counter.counterTwo}</h2>
      <button onClick={() => dispatch({ type: "decrement2" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset2" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment2" })}>
        Increment
      </button>
    </center>
  );
};

export default App;
*/

// ? Example 6:
// using Multiple Reducers

import React from "react";
import { useReducer } from "react";

let initialState1 = 0;
let initialState2 = 10;

let reducer1 = {};

let reducer2 = {};

const App = () => {
  let [counter1, dispatch1] = useReducer(reducer1, initialState1);
  let [counter2, dispatch2] = useReducer(reducer2, initialState2);

  return (
    <>
      <h1>I am App Component</h1>
      <h2>Counter 1 : {counter1}</h2>
      <button onClick={() => dispatch1("decrement")}>Decrement</button>
      <button onClick={() => dispatch1("reset")}>Reset</button>
      <button onClick={() => dispatch1("increment")}>Increment</button>

      <h2>Counter 2 : {counter2}</h2>
      <button onClick={() => dispatch2("decrement")}>Decrement</button>
      <button onClick={() => dispatch2("reset")}>Reset</button>
      <button onClick={() => dispatch2("increment")}>Increment</button>
    </>
  );
};

export default App;
