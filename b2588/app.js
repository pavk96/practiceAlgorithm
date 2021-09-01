const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0], input[1]);

function solution(firstNum, secondNum) {
  let depth = [];
  for (let i = 0; i < secondNum.length; i++) {
    depth[i] = +secondNum[i];
  }
  for (let i = depth.length - 1; i >= 0; i--) {
    console.log(+firstNum * depth[i]);
  }
  console.log(+firstNum * +secondNum);
}
