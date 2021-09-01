const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

solution(+input);
function solution(input) {
  if (input >= 90 && input <= 100) {
    console.log("A");
  } else if (input >= 80 && input <= 89) {
    console.log("B");
  } else if (input >= 70 && input <= 79) {
    console.log("C");
  } else if (input >= 60 && input <= 69) {
    console.log("D");
  } else {
    console.log("F");
  }
}
