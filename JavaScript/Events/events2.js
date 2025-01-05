// ! ===============
let h1 = document.createElement("h1");
h1.innerHTML = "Heyy Buddies , I am h1 Tag";
console.log(h1);

let body = document.body;
body.append(h1);

// now as per dom h1 is one object with lot of dom properties.
// including events too as a properties.
// so we can access in 2 ways dot notation , bracket notation

function fun1() {
  console.log("you clicked on h1 tag");
  console.log("100 lines of code executed successfully");
}

// h1["onclick"] = fun1;
h1.onclick = fun1;

// ! ===============
let h2 = document.createElement("h2");
h2.innerHTML = "I am h2 Tag, Please hover on me";

body.append(h2);

function fun2_on() {
  console.log(h2);
  h2.style.cssText = "color:white;background:teal";
}

function fun2_off() {
  console.log(h2);
  h2.style.cssText = "color:black;background:white";
}

h2.onmouseover = fun2_on;
h2.onmouseout = fun2_off;

// ! task
// create a button ---> on click create a div tag with border --> on mouseover fill the color ---> onmouseout change the color

let btn = document.createElement("button");
btn.innerHTML = "Click Here";
body.append(btn);

function createDiv() {
  console.log("div is created");

  let div = document.createElement("div");
  div.innerHTML = "Div Tag";
  div.style.cssText = `
      border:solid;
      height:200px;
      width:200px;
  `;
  body.append(div);

  function hoverEffect() {
    console.log("I am onmouseover event");

    div.style.cssText += `
        background: brown
    `;
  }

  function without_hover() {
    console.log("I am onmouseout event");

    div.style.cssText += `
        background: white
    `;
  }

  div.onmouseover = hoverEffect;
  div.onmouseout = without_hover;
}
btn.onclick = createDiv;
