const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

solution(input);
function solution(input) {
  if (input % 4 === 0) {
    if (input % 100 === 0) {
      if (input % 400 === 0) {
        console.log(1);
        return;
      }
      console.log(0);
      return;
    }
    console.log(1);
  } else {
    console.log(0);
  }
}
