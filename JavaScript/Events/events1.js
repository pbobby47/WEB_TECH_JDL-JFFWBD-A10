console.log("==== events ====");
console.log(document);

function fun1() {
  console.log("100 lines of code executed successfully");
  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
}

// fun1(); // I dont want to execute directly

function fun2() {
  // alert("Thank you for hovering on MEE!!!");
  // if we want , we can write huge lines of code.
  console.log("Thank for Hovering");
}

function fun3Click() {
  console.log("Click Event Occured");
}

function fun3Hover() {
  console.log("Hover Event Occured");
}

function addContent() {
  let p = document.createElement("p");
  p.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem harum aspernatur nam sed voluptas non placeat eaque reprehenderit tempore optio temporibus ad iusto laboriosam rem, ducimus neque, expedita alias.";
  console.log(p);

  let body = document.body;
  body.append(p);
}

let changeColor = document.getElementById("changeColor");
changeColor.style.cssText = "color:white;background:teal";

function changeColorON() {
  console.log("onmouseover");
  changeColor.style.cssText = " color:white;background:blue";
}

function changeColorOFF() {
  console.log("onmouseout");
  changeColor.style.cssText = " color:white;background:teal";
}
