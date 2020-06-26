// // Ex-1 115
// var name = "Sciarbel";
// // console.log(name.slice(0, 1));
// // console.log(name.slice(1, 2));
// // console.log(name.slice(0, 4));
// // console.log(name.slice(1, 2));
// // console.log(name.length);

// Ex-2
// var tweet = prompt("Compose your tweet:");
// console.log("You typed " + tweet.length + " characters, and now have " + (140 - tweet.length) + " remaining.");

// Ex-3
// var tweet = prompt("Compose your tweet:");
// var tweetCount = tweet.slice(0, 140);
// alert(tweetCount);

// Ex-4
alert(prompt("Compose your tweet:").slice(0, 140));

// // Ex-1 116
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
