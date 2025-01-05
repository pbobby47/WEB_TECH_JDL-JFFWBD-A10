/*! 
   //! CRUD on HTML Attributes
    //? CREATE
        //~ setAttribute():
            It will create a new attribute for an element.
            Syntax: node.setAttribute(name , value);

    //? READ
        // ~ getAttribute():
            It will read the value of a property / attribute.
            Syntax: node.getAttribute(name);

    //? UPDATE
        //~ setAttribute():
            It will create a new attribute for an element.
            If the attribute already exists it will update the value.else it will create.
            Syntax: node.setAttribute(name , value);

    //? DELETE
        // ~ removeAttribute():
            It will remove the property of an element.
            Syntax: node.removeAttribute(name);
*/

let h1 = document.createElement("h1");
h1.innerHTML = "Hii, I am H1 Tag";
console.log(h1);

let body = document.body;
body.append(h1);

// create:
h1.setAttribute("id", "demo");
h1.setAttribute("title", "Hello World");
h1.setAttribute("class", "headingOne");
h1.setAttribute("style", "text-align:center");

// read:
console.log(h1.getAttribute("id"));
console.log(h1.getAttribute("class"));
console.log(h1.getAttribute("title"));
console.log(h1.getAttribute("style"));

// update:
h1.setAttribute("id", "mainHeading");
h1.setAttribute("title", "Hello JavaScript");
h1.setAttribute("class", "heading headingOne headingTwo");
h1.setAttribute("style", "text-align:end");

// delete:
h1.removeAttribute("id");
h1.removeAttribute("class");
h1.removeAttribute("title");
h1.removeAttribute("style");
