// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;
// const id = Symbol('123') // symbol use for making it uniqueness
// const anotherId = Symbol('123')
// console.log(id);
// console.log(id == anotherId)

// const bigNumber = 49234039480324923n;
// console.log(bigNumber);

// Reference (non primitive)

// Array, Objects, Functions
const heros = ["flyingjatt", "krish", "ra.one"];
console.log(typeof heros);

const myObj = {
    "name" : "Satwik",
    "age" : 21
}
console.log(typeof myObj);

const myFunction = function() {
    let a = 1;
    let b = 3;
    let c = a + b;
}
console.log(typeof myFunction);


const arrowFun = () => {
    let x = 32;
    let y = 45;
}
console.log(typeof arrowFun);