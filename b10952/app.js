const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  while (input.length !== 0) {
    const inputElement = input
      .shift()
      .split(" ")
      .map((element) => +element);
    if (inputElement[0] + inputElement[1] !== 0 && inputElement.length === 2) {
      console.log(inputElement[0] + inputElement[1]);
    }
  }
}
