const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const numberList = input[0].split(" ").map((item) => +item);

solution(numberList[0], numberList[1]);
function solution(A, B) {
  console.log(A + B);
}
