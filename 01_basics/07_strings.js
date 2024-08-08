const name = "Satwik";
const age = 21;

console.log(`Hello, My name is ${name}. And my age is ${age}.`);
// using backticks ` called string interpolation (modern way to write strings)

const gameName = new String("Counter Strike");
console.log(gameName);
console.log(typeof gameName);
console.log(gameName.toUpperCase());
console.log(gameName.__proto__);
console.log(gameName.charAt(3));

console.log(gameName.split(" ")); // this coverts it to array
