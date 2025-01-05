// ! ==== Date ====
var date = new Date(); // if we not provided any information , It will display the current date information
console.log(date);

// ? var date = new Date("YYYY MON DD, HH:MM:SS:M");
var date = new Date("2024 nov 14, 10:15:45:123");
console.log(date);

// ! =============== getters =============
// It wil get the information
// year , month , date , day , hh , mm, ss , milli

var date = new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth()); // sequence will start from 0 - jan
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

// ! =============== setters =============
// It will set the information

var date = new Date("2024 feb 14, 10:15:45:789");
console.log(date);

date.setFullYear(2025);
date.setMonth(10);
date.setDate(14);
date.setHours(18);
date.setMinutes(30);
date.setSeconds(40);
date.setMilliseconds(460);

console.log(date);
