let gp = document.getElementById("gp");
let p = document.getElementById("p");
let child = document.getElementById("child");

// ! ====== Event Bubbling ===
/*
gp.addEventListener("click", () => {
  alert("Hello buddy, I am Grand Parent");
} ,  false);

p.addEventListener("click", () => {
  alert("Hello buddy, I am Parent");
},  false);

child.addEventListener("click", () => {
  alert("Hello buddy, I am Child");
}, false);
*/

// ! ====== Event Capturing ===
gp.addEventListener(
  "click",
  () => {
    alert("Hello buddy, I am Grand Parent");
  },
  true
);

p.addEventListener(
  "click",
  () => {
    alert("Hello buddy, I am Parent");
  },
  true
);

child.addEventListener(
  "click",
  () => {
    alert("Hello buddy, I am Child");
  },
  true
);
