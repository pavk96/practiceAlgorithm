const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0].split(" ");
const H = +input[0];
const M = +input[1];

solution(H, M);
function solution(H, M) {
  M = M - 45;
  if (M < 0) {
    if (H === 0) {
      H = 24;
    }
    H -= 1;
    M = M + 60;
  }
  console.log(H, M);
}
