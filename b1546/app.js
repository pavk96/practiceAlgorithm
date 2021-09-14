const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const testCase = parseInt(input[0]);
const caseNum = input[1].split(" ").map((num) => +num);
function solution(testCase, caseNum) {
  const max = Math.max(...caseNum);
  let avg = 0;
  for (let i = 0; i < caseNum.length; i++) {
    caseNum[i] = (caseNum[i] / max) * 100;
  }
  for (let i = 0; i < caseNum.length; i++) {
    avg += caseNum[i];
  }
  const answer = avg / caseNum.length;
  console.log(answer);
}
solution(testCase, caseNum);
