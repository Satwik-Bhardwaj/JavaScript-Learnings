const myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

const newDate = new Date("02/02/2003");
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());

console.log(newDate.toLocaleString("default", {
    weekday: "long"
}));