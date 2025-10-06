/**
 * infer
 * inference -> 추론하다
 */

type FuncA = () => string;

type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer U> ? U : never;

type D = PromiseUnpack<Promise<string>>;

type E = PromiseUnpack<Promise<number>>;

type F = PromiseUnpack<number>;