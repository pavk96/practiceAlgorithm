const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const testCase = parseInt(input.shift());
const point = input;

function solution(testCase, point) {
  let temp = 0;
  for (let i = 0; i < testCase; i++) {
    const pointArray = point[i].split(" ").map((item) => +item);
    pointArray.shift();

    const avg = pointArray.reduce((a, b) => a + b) / pointArray.length || 0;
    for (let j = 0; j < pointArray.length; j++) {
      if (pointArray[j] > avg) {
        temp++;
      }
    }
    console.log(((temp / pointArray.length).toFixed(5) * 100).toFixed(3) + "%");
    temp = 0;
  }
}

solution(testCase, point);
