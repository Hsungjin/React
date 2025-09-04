// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["Hello", "World"];
let boolArr: Array<boolean> = [true, false];
// let boolArr: boolean[] = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string | boolean)[] = [1, "Hello", true];

// 다차원 배열의 타입 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플
// 길이와 타입이 고정된 배열
let tuple1: [number, number] = [1, 2];
let tuple2: [number, string, boolean] = [1, "Hello", true];

const users: [string, number][] = [
  ["황성진", 1],
  ["김아무개", 2],
  ["이아무개", 3],
  ["박아무개", 4],
];
