"use strict";   // this treat all  JS code as newer version

let name = "Satwik";        // string
let age = 21;               // integer
let isLoggedIn = true;      // boolean
let networth = 43896.12;    // float
let aValue = null;          // null (standalone value)
let notInit;                // undefined 
// symbol => unique
// object

console.table([
    [ name, typeof name], 
    [ age, typeof age], 
    [ isLoggedIn, typeof isLoggedIn], 
    [ networth, typeof networth],
    [ aValue, typeof aValue ],
    [ notInit, typeof notInit ]
]);