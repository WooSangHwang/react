export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

//대표 가능
export default function multiply(a, b) {
  return a * b;
}

//cjs common js 모듈시스템
// module.exports = {
//   add,
//   sub,
// };

//es module 방식
//함수 앞에 export를 사용 시 해당 기능을 생략 가능함.
//export { add, sub };
