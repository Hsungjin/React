/**
 * 합수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = "황성진", tall?: number) {
  console.log(`안녕하세요, 저는 ${name}입니다.`);

  if (typeof tall === "number") {
    console.log(`저는 ${tall + 10}cm 입니다.`);
  }
}

introduce("황성진", 177);
introduce("황성진");

function getSum(...rest: number[]) {
  return rest.reduce((acc, curr) => acc + curr, 0);
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);