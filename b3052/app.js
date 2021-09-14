const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((num) => +num);
const FortyTwo = 42;

function solution(inputNumList) {
  const namergeList = [];
  for (let i = 0; i < inputNumList.length - 1; i++) {
    let namerge = inputNumList[i] % FortyTwo;
    namergeList.push(namerge);
  }
  const set = new Set(namergeList);

  console.log(Array.from(set).length);
}
solution(input);
