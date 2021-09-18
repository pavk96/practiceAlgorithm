const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const testCase = parseInt(input.shift());
const OXArray = input;
function solution(testCase, OXArray) {
  let count = 0;
  let temp = 0;
  for (let i = 0; i < testCase; i++) {
    for (let j = 0; j < OXArray[i].length; j++) {
      if (OXArray[i][j] === "O") {
        count++;
        temp += count;
      } else {
        count = 0;
      }
    }
    console.log(temp);
    count = 0;
    temp = 0;
  }
}
solution(testCase, OXArray);
