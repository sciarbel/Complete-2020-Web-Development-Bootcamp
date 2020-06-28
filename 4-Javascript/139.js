function whosPaying(names) {
  names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  let who = Math.floor(Math.random() * names.length);
  console.log( names[who] + " is going to buy lunch today!");
}
whosPaying();

// Angela's Version
// function whosPaying(names) {
//   names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
//   var numberOfPeople = names.lenght;
//   var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
//   var randomPerson = name[randomPersonPosition];
//   return randomPerson + "is going to buy lunch today"
// }