const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const testCase = parseInt(input.shift());
solution(testCase, input);
function solution(testCase, elementList) {
  for (let i = 0; i < testCase; i++) {
    let numberOfElement = elementList[i].split(" ");
    numberOfElement = numberOfElement.map((element) => +element);

    console.log(numberOfElement[0] + numberOfElement[1]);
  }
}
