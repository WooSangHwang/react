let arr1 = [
  { name: "황우상", hobby: "농구" },
  { name: "정승은", hobby: "테니스" },
  { name: "홍혁선", hobby: "농구" },
];

let arrFilter = arr1.filter((item) => item.hobby === "농구");
console.log(arrFilter);
