const testcase1 = [[5], [5], [5], [92, 83, 14, 45, 66, 37, 28, 9, 10, 81]];
const testcase2 = [
  [3, 4],
  [3, 5],
  [2, 3],
  [12, 83, 54, 35, 686, 337, 258, 95, 170, 831, 8, 15],
];
const obj = {};
for (let i = 0; i < testcase1.length; i++) {
  obj["i" + i] = testcase1[i];
}

function solution(x, y, r, v) {
  let answer = 0;
  let random_number = [];
  let dup = 0;
  const right = Math.max(...x) + r[x.indexOf(Math.max(...x))];
  const top = Math.max(...y) + r[y.indexOf(Math.max(...y))];
  const left = Math.min(...x) + r[x.indexOf(Math.max(...x))];
  const bottom = Math.min(...y) + r[y.indexOf(Math.max(...y))];
  const rSum = r.reduce((a, b) => a + b) ** 2;
  const rSub = r.reduce((a, b) => a - b) ** 2;
  console.log(right, top, left, bottom, rSum, rSub);
  for (let i = 0; i < v.length; i++) {
    random_number.push({
      x: left + (v[i] % (right - left)),
      y: bottom + (v[i + 1] % (top - bottom)),
    });
  }
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < random_number.length; j++) {
      const random_x = random_number[j].x;
      const random_y = random_number[j].y;
      const distance = (random_x - x[i]) ** 2 + (random_y - y[i]) ** 2;
      if (distance < rSum && distance > rSub) {
        console.log(2);
        dup++;
      } else if (distance === rSum || (distance === rSub && distance !== 0)) {
        console.log(1);
        answer++;
      } else if (distance < rSub || distance > rSum) {
        console.log(0);
        answer++;
      } else if (distance === 0) {
        if (rSub === 0) {
          console.log(-1);
        } else {
          console.log(0);
        }
      }
    }
  }
  const ratio = (random_number.length - out_circle) / random_number.length;
  answer = Math.floor(raio * (right - left) * (top - bottom));
  console.log(answer);
}

solution(obj.i0, obj.i1, obj.i2, obj.i3);
