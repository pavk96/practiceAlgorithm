const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const testCase = input.shift();
const numList = input.shift().split(" ");

solution(+testCase, numList);
function solution(testCase, numList) {
  numList = numList.map((item) => +item).sort((a, b) => b - a);
  console.log(numList[numList.length - 1], numList[0]);
}
