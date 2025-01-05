// ! ==== Async =====
/*
Async is a keyword, we have to use just before the functions.
To convert the sync function into async function we have to use it.
Sync ---> executes one by one --> It will return the atcual data. 
Async ---> executes simulataneously. --> It will return the data as a promise.

Async function will always return a promise 
normal data --> wrap into a promise ---> result a promise.
promise data --> wrap into a promise ---> result a promise.
*/

// ? ======== async function returns normal data as promise ======
// ? Named Function:
function printMessage() {
  return "Hii Hello How are you???";
}
console.log(printMessage());

async function sayHello() {
  return "Hii Hello!!!";
}
console.log(sayHello());

// ? Anonymous Function:
let tellHello = async function () {
  return "Hii Hello";
};
console.log(tellHello());

// ? Arrow Function:
let sayBye = async () => {
  return "Hai hai Hoi hoi";
};
console.log(sayBye());

// ? ======== async function returns promise data as promise ========
// let p = new Promise((resolve, reject) => {
//   resolve("Hey dude, I am resolved");
// });

// async function handlePromise() {
//   return p;
// }
// console.log(handlePromise());

// ! ==== Await =====
/*
In promises way, we have to use then catch finally.
Instead here we are use an advanced version await keyword.
await keyword will consume the data as then method.
await keyword we should not use without async combination.
*/

// ? without await
/*
let fetch_method = new Promise((resolve, reject) => {
  resolve("Data received");
});

async function handlePromise() {
  return fetch_method.then(data => {
    console.log(data);
  });
}
console.log(handlePromise());
*/

// ? without await
let fetch_method = new Promise((resolve, reject) => {
  resolve("Data received");
});

async function handlePromise() {
  let data = await fetch_method;
  console.log(data);
}
console.log(handlePromise());
