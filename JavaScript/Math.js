// ! ==== Math ====
/*
    Math is an object avaiable in JS.
    It provides alot of methods to perform mathematical operations.
*/

console.log(Math);

// ! =========== Math Methods ==========
// ? abs():
// It will convert the negative numbers into positive.
console.log(Math.abs(-48)); // 48
console.log(Math.abs(48)); // 48
console.log(Math.abs(-105.35)); // 105.35

// ? round():
// It will round off the number to nearest number.
console.log(Math.round(20.8)); // 21
console.log(Math.round(20.2)); // 20
console.log(Math.round(20.5)); // 21
console.log(Math.round(-886.456)); // -886

// ? floor():
// It will round off the number to nearest lowest number.
console.log(Math.floor(20.8)); // 20
console.log(Math.floor(20.2)); // 20
console.log(Math.floor(20.5)); // 20

// ? ceil():
// It will round off the number to nearest highest number.
console.log(Math.ceil(20.8)); // 21
console.log(Math.ceil(20.2)); // 21
console.log(Math.ceil(20.5)); // 21

// ? pow():
// It will return the power of a number.
console.log(2 ** 3);
console.log(2 ** 5);
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 5));
console.log(Math.pow(5, 2));

// ? sqrt():
// It will return the square root of a number.
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(50)); // 7.0710678118654755

// ? cbrt():
// It will return the cube root of a number.
console.log(Math.cbrt(8)); // 2
console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(2)); // 1.2599210498948732

// ? min():
// It will return the minimum number of numbers
console.log(Math.min(10, 20, 40, -660, 450, -330, -450)); // -660
console.log(Math.min(10, 20, 50, 46)); // 10

// ? max():
// It will return the maximum number of numbers
console.log(Math.max(10, 20, 40, -660, 450, -330, -450)); // 450
console.log(Math.max(10, 20, 50, 46)); // 50

// ? random():
// It will always return a number between 0 to 1
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 100);
console.log(Math.random() * 1000);
console.log(Math.random() * 10000);

// ? trunc():
// It will remove the decimal values.
console.log(Math.trunc(12.05)); // 12
console.log(Math.trunc(12.5605)); // 12
console.log(Math.trunc(45.00605)); // 45
console.log(Math.trunc(100.1005)); // 100

console.log("Your OTP is : ", Math.trunc(Math.random() * 10000));
