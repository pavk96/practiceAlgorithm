const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const numArray = input[0];

function solution(numArray) {
  let count = 0;
  for (let j = 100; j <= numArray; j++) {
    const jArray = j.toString().split("");
    for (let i = 0; i < 10; i++) {
      if (jArray[1] - jArray[0] === jArray[2] - jArray[1]) {
        console.log(jArray[1] - jArray[0], jArray[2] - jArray[1]);
        count++;
      }
    }
  }
  console.log(count);
}
solution(numArray);
