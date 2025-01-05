/*
    ! Storage  API:
         1. Session Storage
            It is a temporary data gonna store in web browsers.

         2. Local Storage
            It is a permanent data gonna store in web browsers.

    Storage API's will store the data in the form of Key-value pair.

    ? To Create Data:
        ~ localStorage.setItem("keyname" , "value");
        ~ sessionStorage.setItem("keyname" , "value");
        
        localStorage.setItem("sname" , "utkarsh");
        sessionStorage.setItem("sname" , "utkarsh");

        localStorage.setItem("course" , "React JS");
        sessionStorage.setItem("course" , "React JS");
    
    ? To Get Data:
        ~ localStorage.getItem("keyname");
        ~ sessionStorage.getItem("keyname");
        
        localStorage.getItem("sname"); // utkarsh
        sessionStorage.getItem("sname");

        localStorage.getItem("course"); // React JS
        sessionStorage.getItem("course"); // React JS

    ? To Update Data:
        ~ localStorage.setItem("existing_keyname" , "new value");
        ~ sessionStorage.setItem("existing_keyname" , "new value");
        
        localStorage.setItem("sname" , "utkarsh Singh");
        sessionStorage.setItem("sname" , "utkarsh Singh");

        localStorage.setItem("course" , "MERN Stack");
        sessionStorage.setItem("course" , "MERN Stack");

    ? To Delete Data:
        ~ localStorage.removeItem("existing_keyname" , "new value");
        ~ sessionStorage.removeItem("existing_keyname" , "new value");
        
        localStorage.removeItem("sname");
        sessionStorage.removeItem("sname");

        localStorage.removeItem("course");
        sessionStorage.removeItem("course");

        localStorage.clear()
        sessionStorage.clear()


    ? Methods: 
        setItem --- create , update 
        getItem --- read
        removeItem --- delete 
        clear --- delete all
*/

window.localStorage.setItem("sname", "megha");
undefined
window.localStorage.setItem("age", 20);
undefined
localStorage.setItem("course", "MERN Stack");
undefined
//! ======= dot notion ========
undefined
localStorage.instituteName = "Qspiders";
'Qspiders'
localStorage
// Storage {age: '20', course: 'MERN Stack', instituteName: 'Qspiders', sname: 'megha', length: 4}
//! ======= Bracket notion ========
undefined
localStorage["TrainerName"] = "Bobby Perecharla";
'Bobby Perecharla'
localStorage
// Storage {age: '20', course: 'MERN Stack', instituteName: 'Qspiders', sname: 'megha', TrainerName: 'Bobby Perecharla', …}
// ! ===================== Read =====================
undefined
// ? === getItem() ====
undefined
localStorage.getItem("sname");
'megha'
localStorage.getItem("course");
'MERN Stack'
localStorage.getItem("TrainerName");
'Bobby Perecharla'
localStorage.getItem("Trainer");
null
// ? === dot notation ====
undefined
localStorage.sname
'megha'
localStorage.course
'MERN Stack'
localStorage.TrainerName
'Bobby Perecharla'
// ? === dot notation ====
undefined
// ? === Bracket notation ====
undefined
localStorage["sname"]
'megha'
localStorage["cous"]
undefined
localStorage["course"]
'MERN Stack'
localStorage["TrainerName"]
'Bobby Perecharla'
// ! ===================== Update =====================
undefined
// ! === setItem() method ===
undefined
localStorage.setItem("sname" , "Vikas");
undefined
localStorage
// Storage {age: '20', course: 'MERN Stack', instituteName: 'Qspiders', sname: 'Vikas', TrainerName: 'Bobby Perecharla', …}
// ! === dot notation ===
undefined
localStorage.TrainerName = "Kishore Sir";
'Kishore Sir'
localStorage
// Storage {age: '20', course: 'MERN Stack', instituteName: 'Qspiders', sname: 'Vikas', TrainerName: 'Kishore Sir', …}
// ! === Bracket notation ===
undefined
localStorage["course"]= "Testing";
'Testing'
localStorage
// Storage {age: '20', course: 'Testing', instituteName: 'Qspiders', sname: 'Vikas', TrainerName: 'Kishore Sir', …}TrainerName: "Kishore Sir"age: "20"course: "Testing"instituteName: "Qspiders"sname: "Vikas"length: 5[[Prototype]]: Storage
// ! ===================== delete =====================
undefined
// ? === removeItem() method ===
undefined
localStorage.removeItem("sname");
undefined
localStorage
// Storage {age: '20', course: 'Testing', instituteName: 'Qspiders', TrainerName: 'Kishore Sir', length: 4}
// ? === dot notation ===
undefined
delete localStorage.instituteName;
true
localStorage
// Storage {age: '20', course: 'Testing', TrainerName: 'Kishore Sir', length: 3}
delete localStorage.instituteLocation;
true
// ? === bracket notation ===
undefined
delete localStorage["age"];
true
localStorage
// Storage {TrainerName: 'Kishore Sir', course: 'Testing', length: 2}
let {course} = localStorage;
undefined
console.log(course);
// VM2186:1 Testing
undefined
// ! === delete All ====
undefined
localStorage.clear();
undefined
function sum(a , b) {
    
}
undefined
function sum(a , b) {
    return a  + b;
};
    
undefined
sum(10,20);
30
function sum(...numbers){

    var total = 0;

    for(let num of numbers){
        total += num;

    }
    return total;
};
undefined
console.log(sum(10,20,30,40,50));
// VM2819:1 150
undefined
console
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}assert: ƒ assert()clear: ƒ clear()context: ƒ context()count: ƒ count()countReset: ƒ countReset()createTask: ƒ createTask()debug: ƒ debug()dir: ƒ dir()dirxml: ƒ dirxml()error: ƒ error()group: ƒ group()groupCollapsed: ƒ groupCollapsed()groupEnd: ƒ groupEnd()info: ƒ info()log: ƒ log()memory: MemoryInfo {totalJSHeapSize: 15200000, usedJSHeapSize: 14300000, jsHeapSizeLimit: 2330000000}profile: ƒ profile()profileEnd: ƒ profileEnd()table: ƒ table()length: 0name: "table"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]time: ƒ time()length: 0name: "time"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]timeEnd: ƒ timeEnd()timeLog: ƒ timeLog()timeStamp: ƒ timeStamp()trace: ƒ trace()warn: ƒ warn()Symbol(Symbol.toStringTag): "console"[[Prototype]]: Object
console.warn("Error!!");
// VM2932:1 Error!!
// (anonymous) @ VM2932:1
undefined
console.log("Error!!");
// VM2945:1 Error!!
undefined
console.info("Error!!");
// VM2959:1 Error!!
undefined
console.table(["vikas" , "Rizwan" , "Narender" , "Prabal" , "megha"]);
// VM3119:1 (index)Value(index)Value0'vikas'1'Rizwan'2'Narender'3'Prabal'4'megha'Array(5)0: "vikas"1: "Rizwan"2: "Narender"3: "Prabal"4: "megha"length: 5[[Prototype]]: Array(0)
undefined
var obj = {
  sname: "Parsa",
  age: 22,
  skills: ["Python", "SQL", "React", "MONGODB", "NODE JS", "EXPRESS JS"],
  course: "PFS",
  isPlaced: true,
  ratings: 0,
  47: "Rider",
};
console.log(obj);
// VM3123:10 {47: 'Rider', sname: 'Parsa', age: 22, skills: Array(6), course: 'PFS', isPlaced: true, …}
undefined
console.table(obj);
// VM3171:1 (index)Value012345(index)Value01234547'Rider'sname'Parsa'age22skills'Python''SQL''React''MONGODB''NODE JS''EXPRESS JS'course'PFS'isPlacedtrueratings0Object
undefined


