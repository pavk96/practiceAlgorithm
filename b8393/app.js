const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const number = parseInt(input.shift());

solution(number);
function solution(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  console.log(total);
}
