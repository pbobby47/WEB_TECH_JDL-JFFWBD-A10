/*! 
// ! CRUD ON CSS:
    // ? CREATE:
        // ~ setProperty():
        It will add a new  css property to the targetted element.
        Syntax: node.style.setProperty(property-name , property-value);

        // ~ propertyName:
        It will add a new  css property to the targetted element.
        Syntax: node.style.propertyName = propertyValue;

        // ~ cssText:
        It will add the css properties.
        the above ways will add only one property at a time.
        By using css Text we can able add mutliple properties at a time.
        Syntax: node.style.cssText = "property-name:propertyvalue;property-name:propertyvalue;property-name:propertyvalue;..."

    // ? READ:
        // ~ getPropertyValue(propertyName)

    // ? UPDATE:
        update is similar to create only
        If the property not present ---> It will create
        If the property present ---> It will update

    // ? DELETE:

*/

let h1 = document.createElement("h1");
h1.innerHTML = "Hii, I am H1 Tag";

let body = document.body;
body.append(h1);

// ! === create ===:
// ? 1st way
// h1.style.setProperty("color", "blue");
// h1.style.setProperty("text-align", "center");
// h1.style.setProperty('font-variant', "small-caps");
// h1.style.setProperty("text-decoration", "dashed underline red");
// h1.style.setProperty("font-size", "20px");

// ? 2nd way
// h1.style.color = "blue";
// h1.style.textAlign = "center";
// h1.style.fontVariant = "small-caps";
// h1.style.textDecoration = "dashed underline red";
// h1.style.fontSize = "20px";

// ? 3rd way
// cssText will overide to previous value with new value.
h1.style.cssText =
  "color:blue;text-align:center;font-variant:small-caps;text-decoration:dashed underline red;font-size:20px";

// h1.style.cssText = h1.style.cssText + "border:solid";
h1.style.cssText += "border:solid";


// ! ==== READ ====
console.log(h1.style.getPropertyValue("text-align"));
console.log(h1.style.getPropertyValue("text-decoration"));
console.log(h1.style.getPropertyValue("font-variant"));
console.log(h1.style.getPropertyValue("font-size"));
console.log(h1.style.getPropertyValue("border"));

// ! ===== Update ====
// similar to create

// h1.style.setProperty("color", "red");
// h1.style.color = "red";
h1.style.cssText += "color:red";

// ! ====== DELETE =======
h1.style.removeProperty("color");
h1.style.removeProperty("text-align");
h1.style.removeProperty("border");
h1.style.removeProperty("font-variant");
h1.style.removeProperty("font-size");
h1.style.removeProperty("text-decoration");