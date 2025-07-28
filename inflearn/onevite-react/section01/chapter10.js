// 1. for 반복문
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
    continue;
  }

  if (i === 5) {
    break;
  }
}

// 2. while 반복문
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}