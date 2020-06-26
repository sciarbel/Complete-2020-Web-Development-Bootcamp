var guestList = ["Angela", "Jack", "James", "Lara", "Jason"];
var guestName = prompt("What's your name?");
if (guestList.includes(guestName)) {
  console.log("Welcome!");
} else {
  console.log("Sorry, maybe next time.");
}
