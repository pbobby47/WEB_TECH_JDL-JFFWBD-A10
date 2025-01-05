// ! ======= DOM Selectors ==========
/*
    1. getElementById()
    2. classname
    3. tagname
    4. name attribute

*/

// ! === id name ====
// It will target the elements based on id name.
// It will target only the first matching element.
// It will return only one element.
// ? Syntax: document.getElementById("idVariableName");

// console.log(window.document);
// console.log(document);

let demoId1 = document.getElementById("demo1");
console.log(demoId1);

let demoId2 = document.getElementById("demo2");
console.log(demoId2);

let demoId3 = document.getElementById("demo3");
console.log(demoId3);

// ! === class name ====
// It will target based on class Name.
// It will return all macthing NODES with a classname provided.
// ? Syntax: document.getElementsByClassName("classVariableName");

let demoClass1 = document.getElementsByClassName("demo1");
console.log(demoClass1);

let demoClass2 = document.getElementsByClassName("demo2");
console.log(demoClass2);

let demoClass3 = document.getElementsByClassName("demo3");
console.log(demoClass3);

// ! === Tag Name ====
// It will target the elements based on tag name.
// It return all the macthing nodes with a tag name.
// ? syntax: document.getElementsByTagName("tagName")

let h2Tag = document.getElementsByTagName("h2");
console.log(h2Tag);

let bTag = document.getElementsByTagName("b");
console.log(bTag);

let iTag = document.getElementsByTagName("i");
console.log(iTag);

// ! ===== Name Attribute ====
// It will target based on name attribute.
// It will return all the matching elements with a name attributes.
// ? Syntax: document.getElementsByName("name attribute value");

let userName = document.getElementsByName("userName");
console.log(userName);
console.log(userName[0]);
console.log(userName[1]);

userName[0].value = "Shivani";
userName[1].value = "Kumari";

let userEmail = document.getElementsByName("userEmail");
console.log(userEmail);
console.log(userEmail[0]);

userEmail[0].value = "s@gmail.com";

let userMobileNo = document.getElementsByName("userMobileNo");
userMobileNo[0].value = 987654321;

// ! ============ querySelector() ===============
// It will target based on id , class , tag names.
// It will target only the first matching nodes.
// even it is a class name or tag name also.
// ? Syntax:
// id ---> document.querySelector("#variableName")
// class ---> document.querySelector(".variableName")
// tag ---> document.querySelector("tagName")

// ? qs on id
let qsid = document.querySelector("#demo1");
console.log(qsid);

// ? qs on class
let qsClass = document.querySelector(".demo1");
console.log(qsClass);

// ? qs on tag
let qsTagName = document.querySelector("h2");
console.log(qsTagName);

// ! ============ querySelectorAll() ===============
// It will target based on id , class , tag names.
// It will target all the matching nodes.
// even it is id also
// ? Syntax:
// id ---> document.querySelectorAll("#variableName")
// class ---> document.querySelectorAll(".variableName")
// tag ---> document.querySelectorAll("tagName")

// ? qs on id
let qsaid = document.querySelectorAll("#demo1");
console.log(qsaid);

// ? qs on class
let qsaClass = document.querySelectorAll(".demo1");
console.log(qsaClass);

// ? qs on tag
let qsaTagName = document.querySelectorAll("h2");
console.log(qsaTagName);
