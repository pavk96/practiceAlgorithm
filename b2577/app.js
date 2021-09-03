const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const number = {};

solution(input);
function solution(input) {
  let timedNumber = 1;
  for (let i = 0; i < input.length - 1; i++) {
    timedNumber *= input[i];
  }
  timedNumber = "" + timedNumber;
  for (let i = 0; i < 10; i++) {
    number[`num${i}`] = 0;
  }
  for (let i = 0; i < timedNumber.length; i++) {
    for (let j = 0; j < 10; j++) {
      if (timedNumber[i] == j) {
        number[`num${j}`]++;
      }
    }
  }
  for (let i = 0; i < 10; i++) {
    console.log(number[`num${i}`]);
  }
}
