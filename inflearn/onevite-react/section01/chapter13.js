// 1. 콜백 함수
function main(value) {
  console.log("1");
  value();
  console.log("2");
}

function sub() {
  console.log("i am sub");
}

main(sub);

main(() => console.log("i am sub"));

// 2. 콜백함수의 활용
function repeat(count) {
  for (let i = 0; i < count; i++) {
    console.log(i);
  }
}
repeat(5);

function repeatDouble(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}
repeatDouble(5, (i) => console.log(i));
repeatDouble(5, (i) => console.log(i * 2));
repeatDouble(5, (i) => console.log(i * 3));