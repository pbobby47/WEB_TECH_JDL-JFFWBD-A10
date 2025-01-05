// ! ===== String ======
// A string is a collection of Characters which are enclosed in single quotes or double quotes or back ticks.
var s = "I Love JavaScript";
console.log(s);
console.log(typeof s);

var s = "I Love JavaScript";
console.log(s);
console.log(typeof s);

var s = `I Love JavaScript`; // left side of 1 and top of tab key's
console.log(s);
console.log(typeof s);

// ! String Interpolation:
// It is a process of accessing the variables into a string.
// It is only possible with back ticks.
//~ Syntax: ` ..... ${variableName} ....... `;

var sname = "Shivani";
var sal = 200000;

var greet =
  "Dear " + sname + " you got selected with a salary of " + sal + " per month";
console.log(greet);

var greet = `Dear ${sname}, you got selected with a salary of ${sal} per month `;
console.log(greet);

// ? length Property:
// length is not a method so we should not invoke it.

var s = "JavaScript";
console.log(s);
// console.log(s.length()); //!  s.length is not a function
console.log(s.length);

// ! ============== String Methods ===========
// ? toLowerCase():
// Converts all the alphabetic characters in a string to lowercase.
var s = "I Love JavaScript";
console.log(s);
console.log(s.toLowerCase());

// ? toUpperCase():
// Converts all the alphabetic characters in a string to uppercase.
var s = "I Love JavaScript";
console.log(s);
console.log(s.toUpperCase());

// ? toString():
// It will convert the datatype into string.
var n = 10;
console.log(n); // 10
console.log(typeof n); // number

var s = n.toString();
console.log(s);
console.log(typeof s);

// ? trimStart():
// It will remove the unwanted spaces at intial position.
var s = "            JavaScript      ";
console.log(s);
console.log(s.length);

console.log(s.trimStart());
console.log(s.trimStart().length);

// ? trimEnd():
// It will remove the unwanted spaces at ending position.

var s = "            JavaScript      ";
console.log(s);
console.log(s.length);

console.log(s.trimEnd());
console.log(s.trimEnd().length);

// ? trim():
// It will remove the unwanted spaces at initial Position and ending position.

var s = "       JavaScript      ";
console.log(s);
console.log(s.length);

console.log(s.trim());
console.log(s.trim().length);

// ? replace():
// It will replace the existing character with new charater.
// It will replace only for first macthing characters.

var s =
  "something is happened beacause of something is happened in the past, So don't do that something this something will not happen again...";
console.log(s);
console.log(s.replace("something", "nothing"));

var s = "abcabcabc";
console.log(s);
console.log(s.replace("a", "z"));
console.log(s.replace("ab", "z"));
console.log(s.replace("abca", "z"));

// ? replaceAll():
// It will replace the existing character with new charater.
// It will replace for all the macthing characters.
var s =
  "something is happened beacause of something is happened in the past, So don't do that something this something will not happen again...";
console.log(s);
console.log(s.replaceAll("something", "nothing"));

// ? substr():
// It will extract the sub part of an string.
// Syntax: variableName.substr(SI, length);

var s = "I Love JavaScript";
console.log(s);

// print Love
console.log(s.substr(2, 4));

// print Java
console.log(s.substr(7, 4));

// print Script✖️ SCRIPT✅
console.log(s.substr(11, 6).toUpperCase());

// ? subString():
// It is an alternative to substr.
// Both will perform the same.
// Syntax: variableName.subString(SI , EI);
// EI is not including

var s = "I Love JavaScript";
console.log(s);

// print Love
console.log(s.substring(2, 6));

// print Java
console.log(s.substring(7, 11));

// print Script✖️ SCRIPT✅
console.log(s.substring(11, 17).toUpperCase());

// ? slice():
// It is an alternative to substr and subString.
// All three will perform the same task.
// Syntax: variableName.slice(SI , EI);
// EI is not including

var s = "I Love JavaScript";
console.log(s);

// print Love
console.log(s.slice(2, 6));

// print Java
console.log(s.slice(7, 11));

// print Script✖️ SCRIPT✅
console.log(s.slice(11, 17).toUpperCase());

// ? split():
// It will split the string into an array.
// based on parameter.

var s = "I Love JavaScript";
console.log(s);
console.log(s.split());
console.log(s.split(""));
console.log(s.split(" "));
console.log(s.split("a"));

var s = "I$L_o_ve$Java_Script";
console.log(s);
console.log(s.split());
console.log(s.split(""));
console.log(s.split("$"));
console.log(s.split("-"));
console.log(s.split("_"));

// ? === concat() ===
// It will merge 2 or more strings together.
// ~ Syntax: variableName1.concat(variableName2,variableName3,...);

var s1 = "Tata";
var s2 = "Consultancy";
var s3 = "Services";
let space = " ";

console.log(s1 + " " + s2 + " " + s3);

var mergedArray = s1.concat(space, s2, space, s3);
console.log(mergedArray);

var mergedArray = s1.concat(" ", s2, " ", s3);
console.log(mergedArray);

// ? === indexOf() ===
// It will return the index position of a character.
// only the first matching character.
// If the character is not present it will return -1.
// ~ Syntax: variableName.indexOf("charater");

var s = "JavaScript";
console.log(s);

console.log(s.indexOf("a")); // 1
console.log(s.indexOf("s")); // -1
console.log(s.indexOf("S")); // 4

// ? ==== lastIndexOf() ====
var s = "JavaScript";
console.log(s);

console.log(s.lastIndexOf("a")); // 3
console.log(s.lastIndexOf("s")); // -1
console.log(s.lastIndexOf("S")); // 4

var s = "Hii Hii Hoi Hoi";
console.log(s);

console.log(s.indexOf("i")); // 1
console.log(s.lastIndexOf("i")); // 14
console.log(s.lastIndexOf("Hii")); // 4

var s =
  "Online Class is Awesome beacause its Online, So Online let's learn more";

console.log(s.indexOf("Online"));
console.log(s.lastIndexOf("Online"));

// ? ==== includes() ====
// It will check the character is present in the string or not.
// It will return a boolean as result.
// ~ Syntax: variableName.includes("character");

var s = "Aviral Singh";

console.log(s.includes("$")); // false
console.log(s.includes("a")); // true
console.log(s.includes("singh")); // false
console.log(s.includes("Singh")); // true

// ? ==== charAt() ====
// It will return the character present at index position.
// ~ Syntax: variableName.charAt(indexPosition);

var s = "Hello Utkarsh";
console.log(s);

console.log(s.charAt(4)); // o
console.log(s.charCodeAt(4)); // o's Ascii value
console.log(s.charAt(8)); // k

// ? ==== charCodeAt() ====
// It will return the ASCII value of character present at index position.
// ~ Syntax: variableName.charCodeAt(indexPosition);

var s = "Aviral Singh";
console.log(s);
console.log(s.charAt(0)); // A
console.log(s.charCodeAt(0)); // A's ACII value - 65
console.log(s.charCodeAt(4)); // 97

// ? ==== String.fromCharCode() =====
// It will convert the ascii value into characters.
// ~ Syntax: String.fromCharCode(ASCII Number);  // character.

console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(97)); // a
console.log(String.fromCharCode(100)); // 4
console.log(String.fromCharCode(50)); // 2
console.log(String.fromCharCode(150)); // ?
