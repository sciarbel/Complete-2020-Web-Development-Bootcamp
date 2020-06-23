// // Ex-1 
// var name = "sciarbel";
// console.log(name.toUpperCase());

// // Ex-2
// var name = "sciarbel";
// name = name.toUpperCase();
// console.log(name);

// // Ex-3
// var name = "sciarbel";
// name = name.toLowerCase();
// console.log(name);

// Ex-4 Challenge
var name = prompt("Type your name:");
// var slc1 = name.slice(0, 1).toUpperCase();
// var slc2 = name.slice(1, 20);
// var upper = slc1.toUpperCase();
console.log("Hello " + name.slice(0, 1).toUpperCase() + name.slice(1, name.lenght).toLowerCase());