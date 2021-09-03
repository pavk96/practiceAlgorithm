const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const firstLine = input.shift().split(" ");
const N = +firstLine[0];
const X = +firstLine[1];
const numList = input[0].split(" ");

solution(N, X, numList);

function solution(N, X, input) {
  let answer = "";
  for (let i = 0; i < N; i++) {
    if (input[i] < X) {
      answer += input[i] + " ";
    }
  }
  console.log(answer);
}
