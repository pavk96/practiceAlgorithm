const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const testCase = parseInt(input.shift());

solution(testCase, input);
function solution(testCase, numList) {
  for (let i = 1; i <= testCase; i++) {
    const splitedNum = numList[i - 1].split(" ");
    console.log(`Case #${i}: ${+splitedNum[0] + +splitedNum[1]}`);
  }
}
