// var year = prompt("Type the year:");
// isLeap(year);
// function isLeap(year) {
//   if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
//     console.log("Leap Year.");
//   } else {
//     console.log("Not leap year.");
//   }
// }

var year = prompt("Type the year:");
isLeap(year);

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      leap();
    }
    else {
      notLeap();
    }
  } else {
    notLeap();
  } 
}

function leap() {
  console.log("Leap Year.");
}

function notLeap() {
  console.log("Not leap year.");
}