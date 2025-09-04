// any
// 특정 변수의 타입을 모르는 경우
let anyVar: any = 1;
anyVar = "hello";
anyVar = true;

anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
// any와 비슷하지만 더 안전한 타입
let unknownVar: unknown = 1;
unknownVar = "hello";
unknownVar = true;

unknownVar = {};
unknownVar = () => {};

if (typeof unknownVar === "number") {
  unknownVar.toFixed();
}

if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}
