//1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

let [one, two, three, four = 4, five = 5] = arr;

console.log(one, two, three, four, five);

//2. 객체의 구조분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let { name, age: myAge, hobby, extra = "aa" } = person;

console.log(name, myAge, hobby, extra);
