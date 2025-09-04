// any
// 특정 변수의 타입을 모르는 경우
let anyVar = 1;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUpperCase();
anyVar.toFixed();
let num = 10;
num = anyVar;
export {};
