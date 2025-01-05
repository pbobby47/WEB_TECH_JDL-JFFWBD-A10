// ! ========= CRUD on HTML Elements ===========
/*! 

    // ! CREATE:
        // ? 1. createElement():
            It will create an element with a provided parameter.
            Syntax: document.createElement("node name")
            Ex: let h1Tag = document.createElement("h1");

            To add the content:
            a. textContent:
                It will update the content of the element(Node).
                h1Tag.textContent = "--------";

            b. innerText:
                It will update the content of the element(Node).
                It is similar to textContent
                h1Tag.innerText = "--------";

            c. innerHTML:
                It will update the content of the element(Node).
                It is similar to textContent and innerText but the only difference it will add the elements also.
                h1Tag.innerHTML = "I am Shivam";
                h1Tag.innerHTML = "I am <b>Shivam</b>";

        // ? 2. append() / appendChild():
            append() --> It will append the content or the node
            Syntax: container.append(node / content)

            appendChild() --> It will append only the node.
            Syntax: container.appendChild(node)

    // ! READ:
        It is a process of access the elements present in the dom.
        Now the elements we can access in 6 ways.
        1. id name
        2. classname
        3. tagname
        4. name attribute
        5. querySelector
        6. querySelectorAll
        ====================== DOM Selectors =====================

    // ! UPDATE:
        // ? For Content
            textContent , innerText , innerHTML

        // ? For Node
            replaceChild()

    // ! DELETE:
        removeChild()
*/

// ! === Create ===
/*
// ? Tag:
// ~ Syntax: document.createElement("node name");
let h1Tag = document.createElement("h1");
console.log(h1Tag);

// ? content:
// In dom we have innerText, innerHTML, textContent properties in a node object.
// This will points to the content of an element.
// If we want create the content or update the content we have to use follows 3 properties.
// ~ Syntax: node.textContent = "...... content .......";
// ~ Syntax: node.innerText = "...... content .......";
// ~ Syntax: node.innerHTML = "...... content .......";

// h1Tag.textContent = "Heyy buddy, I am from DOM - textContent";
// h1Tag.innerText = "Heyy buddy, I am from DOM - innerText";
// h1Tag.innerHTML = "Heyy buddy, I am from DOM - innerHTML";

h1Tag.textContent = "I am <i>Shivam - <u>1</u> </i>";
h1Tag.innerText = "I am <i>Shivam - <u>1</u> </i>";

h1Tag.innerHTML = "I am <i>Shivam - <u>1</u> </i>"; // It allows html elements also.

let container = document.querySelector("body");

// container.appendChild(h1Tag); // by using appendChild we can able to append only node.
// container.appendChild("This is the content"); // by using appendChild we can able to append only node.

container.append("This is the content"); // by using append we can able to append content also
container.append(h1Tag); // by using append we can able to append node also
*/

// ! ========================= restart ======================

// ! === Create ===
let h1 = document.createElement("h1");
console.log(h1);

// textContent  , innerText , innerHTML
h1.innerHTML = "I am h1 Tag buddy...";

// append , appendChild
let body = document.body;
body.append(h1);

// ! === Read ===
// dom selectors

// ! === Update ===
// ? for content
// textContent , innerText , innerHTML
h1.innerHTML = "Hello Everybody I am h1 Tag...";

// ? for element
// replace it
// ~ Syntax: container.replaceChild(new Node , old Node);

let p = document.createElement("p");
p.innerHTML = "I am p Tag";
console.log(p);

body.replaceChild(p, h1);

// ! === Delete ===
// remove it from DOM.
// ~ Syntax: container.removeChild(nodeName);

body.removeChild(p);

