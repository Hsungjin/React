// 1. if 조건문
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다");
  num--;  
} else {
  console.log("num은 10 미만입니다");
  num++;
}

console.log(num);

// 2. switch 조건문
let num2 = 10;

switch (num2) {
  case 10:
    console.log("num2는 10입니다");
    break;
  case 20:
    console.log("num2는 20입니다");
    break;
  default:
    console.log("num2는 10이나 20이 아닙니다");
    break;
}