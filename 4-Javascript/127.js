var weight = prompt("How much do you weigh?");
var height = prompt("What is your heigth?");

function bmiCalculator(weight, height) {
  // let bmi = Math.floor(weight / (height * height));;
  let bmi = Math.round(weight / (Math.pow(height, 2)));
  if (bmi > 24.9) {
    return ("Your BMI is " + bmi + ", so you are overweight.");
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return ("Your BMI is " + bmi + ", so you have a normal weight.");
  }
  if (bmi < 18.5) {
    return ("Your BMI is " + bmi + ", so you are underweight.");
  }
}

// console.log(bmiCalculator(weight, height));