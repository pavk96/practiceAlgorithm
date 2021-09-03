const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input.map((item) => +item);
  solution(input);
  process.exit();
});

function solution(input) {
  while (input.length !== 0) {
    const inputElement = input
      .shift()
      .split(" ")
      .map((element) => +element);
    if (inputElement[0] + inputElement[1] !== 0 && inputElement.length === 2) {
      console.log(inputElement[0] + inputElement[1]);
    }
  }
}
