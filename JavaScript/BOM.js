/*! 
    //!  BROWSER OBJECT MODEL:
    The browser object mode allows us to communicate with the browsers.
    Browser is  always indicated by the keyword window.
    In this window, we will have many object models like
        1. document
        2. screen 
        3. history
        4. navigator
        5. location
*/

// console.log("I am browser object model file");
// console.log(window);

// ? ======== window Properties =============
/*
    1. document
    2. screen
    3. history
    4. navigator
    5. location
    6. innerHeight
    7. outerHeight
    8. innerwidth
    9. outerwidth
*/

// console.log(window.document); // It will return the document(html code).
// console.log(window.screen); //It will provide the info about screen
// console.log(window.history); // It will provide the info about history (no.of webpages).
// console.log(window.navigator); // It will provide the info about browser.
// console.log(window.location); // It will provide the info about current location.
// console.log(window.innerHeight); // document height excluding console area.
// console.log(window.outerHeight); // document height including console area.
// console.log(window.innerWidth); // document width excluding console area.
// console.log(window.outerWidth); // document width including console area.

// ? ======== window methods =============
// ~ prompt():
// It will take the input from the user.
// let input = window.prompt("Enter your Name");
// console.log("welcome", input);

// ~ alert():
// It will display a popup message with a button OKAY.
// window.alert("alert ----- You have logged in succussfully...");

// ~ confirm():
// It will display a popup message with 2 button OKAY and CANCEL.
// window.confirm("confirm ------ You have logged in succussfully...");

// ~ open():
// It will open a new webpage with provided path.
// window.open("https://www.youtube.com/");
// window.open("https://www.instagram.com/");
// window.open("https://excalidraw.com/");

// ~ close():
// It will close the current webpage.
// window.close();

// ~ setTimeout(callback, time);
// It will invoke the callback function after the completion of time.
// for example 3s ---> the callback will invoke automatically after 3s.
// whenever we wants to keep a timer then we have to use this method.
// It will execute only once after the completion of time.

// console.log("I am the first message");

// setTimeout(() => {
//   console.log("I am the second message , i will print after 3 sec");
// }, 3000);

// setTimeout(() => {
//   console.log("I am the third message, i will print after 6 sec");
// }, 6000);

// console.log("I am the fourth message");

// ~ setInterval(callback , intervaltime);
// It will execute the function for every interval time.

// setInterval(() => {
//   console.log("I am a message");
// }, 3000);

// ~ clearTimeOut():
// It will stop the working of setTimeOut()

// let a = setTimeout(() => {
//   console.log("i am the message will print after 5sec");
//   // 1000 lines of code
// }, 5000);

// clearTimeout(a); // To stop the working of setTimeout().

// ~ clearInternal():
// It will stop the working of setInterval()

// let b = setInterval(() => {
//   console.log("I am the interval message");
// }, 3000);

// // clearInterval(b);

// setTimeout(() => {
//   clearInterval(b);
// }, 7000);

// ! =============== DOM =====================
// It will allows us to manipulate the document.

// ! =============== Screen =====================
// It will provide the basic info abou the screen.
console.log(window);
console.log(window.screen);
console.log(screen);

console.log("height - ", window.screen.height); //This is the total height of the System screen.
console.log("height - ", screen.height); //This is the total height of the System screen.

console.log("availHeight - ", window.screen.availHeight); // This is height can able to occupy by the browser.
console.log("availHeight - ", screen.availHeight); // This is height can able to occupy by the browser.

console.log(screen.width);
console.log(screen.availWidth);
console.log(screen.orientation);
console.log(screen.orientation.type);

// ! =============== History =====================
// It will keep a track on how many webpages opened in a tab.
// properties --> length
// method --> forward() , back() , go(+-number)

// ! =============== Navigator =====================
// It will provide the info about the browser.

console.log(window);
console.log(window.navigator);
console.log(window.navigator.appCodeName);
console.log(window.navigator.appName);
console.log(window.navigator.appVersion);
console.log(window.navigator.platform);
console.log(window.navigator.onLine);
console.log(window.navigator.pdfViewerEnabled);
console.log(window.navigator.userAgent);

// ! =============== Location =====================
// It will provide the info about the current location.

console.log(window);
console.log(window.location);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.protocol);
console.log(location.href);
console.log(location.origin);
console.log(location.pathname);

// ? methods:
// ~ 1. assign():
// It will assign new address to the current page.
// http:127.0.0.1:5500/index.html 🚫🚫✖️✖️✖️

// window.location.assign("https://www.youtube.com/");

// ~ 2. reload():
// It will reload the page.
// window.location.reload();

// ~ 3. replace():
// It will replace the current path address with new address
// It is similar to assign() method.

window.location.replace("https://www.meesho.com/men-watches/pl/3k7");
