// Ex-1
// var n = Math.random();
// console.log(Math.round(n * 6));

// Ex-2 Love Score Challenge
// prompt("Type the name of the first person");
// prompt("Type the name of the second person");
var loveScore = Math.round(Math.random() * 100);
if (loveScore > 70) {
  alert("Your love score is " + loveScore + "%, which is how Kanye loves Kanye.");
}
if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%.");
} else {
  alert("Your love score is " + loveScore + "%: you go like oil and water.");
}