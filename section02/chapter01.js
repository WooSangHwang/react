//1.falsy한 값.

function getName(person) {
  let name = person && person.name;
  console.log(name || "이름이 없습니다.");
}

getName({ name: "황우상" });
