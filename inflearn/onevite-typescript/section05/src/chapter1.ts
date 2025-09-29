/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

// interface Dog {
//   name: string;
//   age: number;
//   color: string;
// }

interface Dog extends Animal {
  color: string;
}

const dog: Dog = {
  name: "콩이",
  age: 2,
  color: "black",
};

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

interface Cat extends Animal {
  isScratch: boolean;
}

const cat: Cat = {
  name: "냥이",
  age: 3,
  isScratch: true,
};

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

interface Chicken extends Animal {
  isFly: boolean;
}

const chicken: Chicken = {
  name: "치킨",
  age: 1,
  isFly: false,
};

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "콩이",
  age: 2,
  color: "black",
  isScratch: true,
};
