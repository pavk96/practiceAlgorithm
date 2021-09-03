const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

solution(input);
function solution(input) {
  const save = input.map((item) => +item);
  const max = Math.max(...save);
  const maxIndex = input.indexOf(max + "") + 1;

  console.log(max, maxIndex);
}
