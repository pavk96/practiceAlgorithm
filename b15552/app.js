const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";
rl.on("line", (line) => {
  const input = line.split(" ");
  if (input.length === 2) {
    const a = +input[0];
    const b = +input[1];
    answer += a + b + "\n";
  }
}).on("close", () => {
  console.log(answer);
  process.exit();
});
