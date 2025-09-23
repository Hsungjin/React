/**
 * 기본 타입간의 호환성
 */

let num1: number = 20;
let num2: 10 = 10;

/**
 * 객체 타입간의 호환성
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "red",
};

let dog: Dog = {
  name: "돌돌이",
  color: "black",
  breed: "진도",
};

animal = dog;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book = {
  name: "책",
  price: 10000,
};

let programmingBook: ProgrammingBook = {
  name: "프로그래밍 책",
  price: 20000,
  skill: "프로그래밍",
};

book = programmingBook;

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
  name: "책",
  price: 10000,
  // skill: "프로그래밍",
};

function func(book: Book) {}

func({
  name: "책",
  price: 10000,
  // skill: "프로그래밍"
});
func(programmingBook);
