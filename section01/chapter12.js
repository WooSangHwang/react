function funcA() {
  console.log("funcA2");
}

let varA = funcA;
console.log(varA);
varA();

function repeat(idx, callback) {
  for (let i = 1; i <= idx; i++) {
    callback(i);
  }
}

repeat(5, (value) => {
  console.log(value);
});

repeat(5, (value) => {
  console.log(value * 2);
});
