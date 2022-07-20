const readFromFile = require("../util/readFiles.js");
console.log(readFromFile);
let input = readFromFile("day3/inputDay3.txt","\n");

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

function countBits(bitMatrix) {
  let gama = "";
  let eleps = "";
  for (let i = 0; i < 12; i++) {
    let countZeros = 0;
    let countOnes = 0;

    for (let j = 0; j < bitMatrix.length; j++) {
      if (bitMatrix[j][i] == 0) {
        countZeros++;
      }
      if (bitMatrix[j][i] == 1) {
        countOnes++;
      }
    }

    gama += countOnes > countZeros ? "1" : "0";
    eleps += countOnes > countZeros ? "0" : "1";
  }
  return [Number(gama), Number(eleps)];
}

const [gama, eleps] = countBits(bitMatrix);

console.log(parseInt(gama, 2) * parseInt(eleps, 2));
