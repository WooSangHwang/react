// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undifined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;

console.log(var4);

// 2.typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
let t1 = typeof var7;
console.log(t1);

// 3. 삼항연산자

let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수";

console.log(res);
