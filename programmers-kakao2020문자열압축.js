//실패한 케이스 다시 풀기!
function solution(s) {
  var answer = 0;
  //문자열을 단위 하나로 압축하는 방법
  //첫 글자부터 연속되는 문자열이어야한다.
  //모든 문자열이 특정 패턴을 가지고 있어야한다.
  //하나라도 다르면 그 단위로는 자를 수가 없다.
  //문자열의 최대 길이를 넘은 단위는 1과 같다.
  //단위에 맞게 나눠져야한다. 그렇지않으면 아무리 중복되도 같을 수가 없다.
  //나눠진 다음에는?slice로 i(=단위) * j(=그 안의 순차적 인덱스 ===)
  //asdfasdf일 때 i=4라면 s/i = 2만큼 j가 생성되면 된다.
  //이전거랑 같은지 체크해야된닫
  //#3에서 i=3일 때 ㅇ나ㅓ 나눠져야하는 것이 아니구나...
  const strLength = s.length;
  let pre = "";
  for (let i = 2; i <= strLength; i++) {
    if (strLength % i === 0) {
      for (let j = 1; j <= strLength / i; j++) {
        console.log("pre" + pre);
        //console.log(s.slice(j-1,(j-1)*i),j,i)
        const current = s.slice(j - 1, (j - 1) * i);
        if (current === pre) {
          //console.log(current,pre)
        }
        pre = current;
        console.log("current" + pre);
      }
    }
  }
  return answer;
}
