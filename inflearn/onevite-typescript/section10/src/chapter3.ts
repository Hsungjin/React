/**
 * Exclude<T, U>
 * -> 특정 타입에서 특정 타입을 제외하여 타입을 정의하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * -> 특정 타입에서 특정 타입을 추출하여 타입을 정의하는 타입
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * -> 함수 타입의 반환 타입을 추출하여 타입을 정의하는 타입
 */

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
