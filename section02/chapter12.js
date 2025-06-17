function add(a, b, callback) {
  let sum = a + b;

  callback(sum);
}

add(1, 2, (item) => {
  console.log(item);
});

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function coolDownFood(food, callback) {
  setTimeout(() => {
    const coolDownFood = `식은 ${food}`;
    callback(coolDownFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `얼은 ${food}`;
    callback(freezeFood);
  }, 1500);
}

orderFood((food) => {
  console.log(`주문한 음식 ${food}`);

  coolDownFood(food, (coolDownFood) => {
    console.log(coolDownFood);

    freezeFood(food, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
