// function bmiCalculator(weight, height) {
//     let bmiFormula = weight / (height * height);
//     let result;
//     if (bmiFormula < 18.5) {
//         result = "Underweight";
//     } else if (bmiFormula >= 18.5 && bmiFormula <= 24.9) {
//         result = "Normal weight";
//     } else if (bmiFormula >= 25 && bmiFormula <= 29.9) {
//         result = "Overweight";
//     } else {
//         result = "Obese";
//     }
//     return result;
// }

// let weight = prompt('Enter your weight in kg');
// let height = prompt('Enter your height in meter');
// let bmi = bmiCalculator(weight, height);

// if (bmi == 'Underweight') {
//     console.log(`Your BMI status is "${bmi}". You should put on  some weight.`);
// } else if (bmi == 'Normal weight') {
//     console.log(`Your BMI status is "${bmi}". You are fine.`);
// } else if (bmi == 'Overweight') {
//     console.log(`Your BMI status is "${bmi}". You should start working out-.`);
// } else {
//     console.log("Your BMI status is "${bmi}". You should be worried about your health.`);
// }



function bmiCalculator(weight, height) {
    let bmiFormula = weight / (height * height);
    let result;
    if (bmiFormula < 18.5) {
        return console.log(`Your BMI status is "Underweight". You should put on some weight.`);
    } else if (bmiFormula >= 18.5 && bmiFormula <= 24.9) {
        return console.log(`Your BMI status is "Normal weight". You are fine.`);
    } else if (bmiFormula >= 25 && bmiFormula <= 29.9) {
      return  console.log(`Your BMI status is "Overweight". You should start working out.`);
    } else {
      return  console.log(`Your BMI status is "Obese". You should be worried about your health.`);
    }
    
}

let weight = prompt('Enter your weight in kg');
let height = prompt('Enter your height in meter');
let bmi = bmiCalculator(weight, height);

