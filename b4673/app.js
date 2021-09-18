//이거 컨닝했다.... 파이팅하자!
function d(n, arr) {
  let tmp = n;
  let sum = tmp;
  while (tmp > 0) {
    sum += tmp % 10;
    tmp = parseInt(tmp / 10);
  }
  arr[sum] = true;
}
function solution() {
  let array = new Array(9999);
  array.fill(false);
  for (let i = 1; i <= 10000; i++) {
    d(i, array);
  }
  for (let j = 1; j <= 10000; j++) {
    if (!array[j]) {
      console.log(j);
    }
  }
}
solution();
