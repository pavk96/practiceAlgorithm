const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const testCase = input.shift();

function solution(testCase, input) {
  console.log(testCase, input);
  for (let i = 0; i < testCase; i++) {
    input[i].split("").reduce((a, b) => {
      if (a === b) {
        console.log(i + "번째", a, b + "\n");
      }
      return b;
    });
  }
}
solution(testCase, input);
