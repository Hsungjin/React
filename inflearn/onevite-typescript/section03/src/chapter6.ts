/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "SungJin";
person.age = 28;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 갑 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as undefined;
// let num3 = 10 as string;
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "콩이",
  color: "black",
} as const;

// cat.name = "콩이2";

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 제목",
  author: "게시글 작성자",
}

const len1: number = post.author?.length ?? 0;
const len2: number = post.author!.length ?? 0;