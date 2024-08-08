let myName = "Satwik";
let someName = myName;
console.log(myName);

// changing someName
someName = "Shiv";
console.log(someName); // output : Shiv
console.log(myName); // output : Satwik // changing someName doesn't change myName beacause copy is provided in the stack


let myObj = {
    name : "Satwik",
    age : 21
};
let someObj = myObj;
console.log(myObj);

// changing value of someObj
someObj.name="Shiv";

console.log(someObj); // output : .name = "Shiv"
console.log(myObj);  // output : .name - "Shiv" // changing someObj also changes myObj because reference is provided in heap

