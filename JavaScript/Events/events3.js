// ! ========= addEventListeners ==============
//~ node.addEventListener("eventName", functionName);
/*
let h1 = document.createElement("h1");
h1.innerHTML = "This is h1 Tag";
console.log(h1);

document.body.append(h1);

function applyBorder() {
  console.log("border applied");
  h1.style.cssText = `
        border:solid blue;
    `;
}
h1.addEventListener("mouseover", applyBorder);

function applyBgColor() {
  console.log("bgcolor applied");
  h1.style.cssText += `
        background: green;
        color:white;
        text-align:center;
    `;
}
h1.addEventListener("click", applyBgColor);
*/

// ! ========= froms =======
/*
let form = document.querySelector("form");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userNo = document.getElementById("userNo");

console.log(form);

//! onsubmit
// The default nature of submit is send and reload the page.

function handleSubmit(e) {
  e.preventDefault(); //? will remove the default behaviour.

  console.log("form submitted");
  console.log(userName.value);
  console.log(userEmail.value);
  console.log(userNo.value);

  console.log({
    name: userName.value,
    email: userEmail.value,
    mobile: userNo.value,
  });
}
form.addEventListener("submit", handleSubmit);

// ! onchange
console.log(userName);
function handleName() {
  console.log("userName is changing");
}
userName.addEventListener("change", handleName);
*/

// ! Task:
// create one section ---> create 7 div tags ---> append into section --> apply css regarding your output ---> for every div tag apply onmouseover and onmouseout events using addeventlisteners --> onmouseover color onmouseout white

// red, orange, yellow, green, blue, indigo, and violet.

// ! ===== 1st way ====
/*
let section = document.createElement("section");

let red = document.createElement("div");
let orange = document.createElement("div");
let yellow = document.createElement("div");
let green = document.createElement("div");
let blue = document.createElement("div");
let indigo = document.createElement("div");
let violet = document.createElement("div");

section.append(red);
section.append(orange);
section.append(yellow);
section.append(green);
section.append(blue);
section.append(indigo);
section.append(violet);

document.body.append(section);

// applying css
section.style.cssText = `
  height:100vh;
  widht:100vw;
  display:flex;
`;

red.style.cssText = "flex:1;";
orange.style.cssText = "flex:1;";
yellow.style.cssText = "flex:1;";
green.style.cssText = "flex:1;";
blue.style.cssText = "flex:1;";
indigo.style.cssText = "flex:1;";
violet.style.cssText = "flex:1;";

// applying events
red.addEventListener("mouseover", () => red.style.cssText += "background:red");
orange.addEventListener("mouseover", () => orange.style.cssText += "background:orange");
yellow.addEventListener("mouseover", () => yellow.style.cssText += "background:yellow");
green.addEventListener("mouseover", () => green.style.cssText += "background:green");
blue.addEventListener("mouseover", () => blue.style.cssText += "background:blue");
indigo.addEventListener("mouseover", () => indigo.style.cssText += "background:indigo");
violet.addEventListener("mouseover", () => violet.style.cssText += "background:violet");

red.addEventListener("mouseout", () => red.style.cssText += "background:white")
orange.addEventListener("mouseout", () => orange.style.cssText += "background:white")
yellow.addEventListener("mouseout", () => yellow.style.cssText += "background:white")
green.addEventListener("mouseout", () => green.style.cssText += "background:white")
blue.addEventListener("mouseout", () => blue.style.cssText += "background:white")
indigo.addEventListener("mouseout", () => indigo.style.cssText += "background:white")
violet.addEventListener("mouseout", () => violet.style.cssText += "background:white")
*/

// ! ====== 2nd way =====
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let section = document.createElement("section");
section.style.cssText = `
  height:100vh;
  widht:100vw;
  display:flex;
`;
document.body.append(section);

for (let color of colors) {
  console.log(color);

  let div = document.createElement("div");
  div.innerHTML = color;
  div.style.cssText = "flex:1;";
  section.append(div);
  console.log(div);

  div.addEventListener("mouseover", () => {
    div.style.cssText += `background:${color}`;
  });

  div.addEventListener("mouseout", () => {
    div.style.cssText += "background:white";
  });
}
