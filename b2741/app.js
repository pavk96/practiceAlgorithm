const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const number = +input[0];

solution(number);
function solution(number) {
  let numList = "";
  for (let i = 1; i <= number; i++) {
    numList += i + "\n";
  }
  console.log(numList);
}
