// Ex-1 FizzBuzz Challenge
var output = [];
var count = 1;

function fizzbuzz() {
  // Class 140
  while (count <= 100) {

    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}
fizzbuzz();


// for (count = 1; count <= 100; count++) {
//   fizzbuzz();
//   console.log(output);
// }