//commonjs 모듈 방식
// const { add, sub } = require("./math");

//es 모듈 방식
import { add, sub } from "./math.js";
//대표 모듈불러는 방법 //이름도 변경 가능 multiply => mul
import mul from "./math.js";
//합치는것도 가능
//import mul, { add, sub } from ".math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));

//d외부 라이브러리를 가져올때는 경로를 입력하는 것이 아니라 라이브러리 이름만.
import randomColor from "randomcolor";

console.log(randomColor());
