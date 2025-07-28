// 1. 대입 연산자
let a = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = 3 ** 2;

console.log(num1, num2, num3, num4, num5, num6);

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
console.log(num7);
num7 -= 10;
console.log(num7);
num7 *= 20;
console.log(num7);
num7 /= 2;
console.log(num7);
num7 %= 199;
console.log(num7);

// 4. 증감 연산자
let num8 = 10;
console.log(num8++); // 10 (후위연산)
console.log(num8); // 11
console.log(++num8); // 12 (전위연산)
console.log(num8); // 12
console.log(num8--); // 12 (후위연산)
console.log(num8); // 11
console.log(--num8); // 10 (전위연산)
console.log(num8); // 10

// 5. 논리 연산자
let num9 = 10;
let num10 = 20;
console.log(num9 == num10 && num9 < num10);
console.log(num9 != num10 || num9 < num10);
console.log(!(num9 == num10));
console.log(!(num9 != num10));
console.log(!(num9 > num10));
console.log(!(num9 < num10));

// 6. 비교 연산자
let num11 = 10;
let num12 = 20;
console.log(num11 === num12);
console.log(num11 !== num12);
console.log(num11 > num12);
console.log(num11 < num12);

// 7. 삼항 연산자
let num13 = 10;
let num14 = 20;
console.log(num13 > num14 ? "num13이 num14보다 큽니다" : "num13이 num14보다 작습니다");
