// While loop version
// function beer() {
//   let bottle = 99;
//   while (bottle > 1) {
//     console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. Take one down and pass it around, " + (bottle - 1) + " bottles of beer on the wall.");
//     bottle--;
//   }
//   console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. Take one down and pass it around, no more bottles of beer on the wall.");

//   console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
// }
// beer();


// For loop version
function beer(bottle) {
  for (bottle = 99; bottle > 1; bottle--) {
    console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. Take one down and pass it around, " + (bottle - 1) + " bottles of beer on the wall.");
  }
  console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. Take one down and pass it around, no more bottles of beer on the wall.");

  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}
beer();

// Angela's Version
// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }