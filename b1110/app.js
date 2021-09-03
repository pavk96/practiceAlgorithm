const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];

solution(input);

function solution(input) {
  const save = Number(input);
  let count = 0;
  if (input < 10) {
    input = "0" + input;
  }
  do {
    input = input[1] + ((+input[0] + +input[1]) % 10);
    count++;
  } while (input != save);
  console.log(count);
}
