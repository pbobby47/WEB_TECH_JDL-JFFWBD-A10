/*
! FETCH :
1. Fetch API allows us to make http request to a network.
2. It is a best way to perform GET Request.
3. For example : if some data is store at somewhere , we can get that by using fetch method.
4. once after the request is successul. fetch will return the status of request as response (in the form of promise).
5. we have to consume the fetch promise.
6. The response we have to read in the form of readable streams
7. These readable streams will return a promise with actual data.
8. we have to consume the readable streams promise.

Finally ===> fetch method --> promise ---> consume promiseResponse ---> response.readableStream ---> promise ---> consume readableStreampromise ---> data. 
*/

// ! =========== Promises Way =============

//?  1. fetch api will return a promise
// console.log(fetch("https://fakestoreapi.com/products")); // Promise

//? 2. consume the fetch Promise.
// fetch("https://fakestoreapi.com/products").then(res => {
//   console.log(res);
// });

//? 3. Response we have to read in readable formats
// we can't read the data directly.
// so we have to use readable methods.
// i.e res.text() --> return the o/p as text in Promise object || res.json()  ---> return the o/p as json data in Promise object.

// fetch("https://fakestoreapi.com/products").then(res => {
//   console.log(res.text());
// }); // Promise

// ? 4. res.json() method returns promise we have to consume it.
// fetch("https://fakestoreapi.com/products")
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

// ? All at a time:
// External Path Address
// fetch("https://api.github.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data));

// Internal Path Address:
// fetch("./data.json")
//   .then(res => res.json())
//   .then(data => console.log(data));

// ! =============== Async Await ========
// async function getData() {
//   let res = await fetch("./data.json");
//   let data = await res.json();
//   console.log(data);
// }
// getData();

// ! ===================== Fetch API Recap ===================

let external_source = "https://fakestoreapi.com/products";
let internal_source = "./data.json";

// ? Promises way:
// fetch(internal_source)
//   .then(response => response.json())
//   .then(data => console.log(data));

// ? Async Await Way:
async function getData() {
  let response = await fetch(internal_source);
  let data = await response.json();
  console.log(data);
}
getData();
