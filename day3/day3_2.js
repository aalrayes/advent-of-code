const readFromFile = require("../util/readFiles.js");
let input = readFromFile("day3/inputDay3.txt");
function listToMatrix(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // Getting the string as a parameter
    // and typecasting it into an integer
    let myFunc = (num) => Number(num);

    let intArr = Array.from(String(arr[i]), myFunc);
    // Print the result array
    newArr.push(intArr);
  }
  return newArr;
}

const bitMatrix = listToMatrix(input);

function getLifeSupportRatting() {
  let oxygenGeneratorRating = 0;
  let co2ScrubberRating = 0;

  return oxygenGeneratorRating * co2ScrubberRating;
}
