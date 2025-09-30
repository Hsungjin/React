/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = { key: "key", value: 1 };
let keyPair2: KeyPair<boolean, string> = { key: true, value: "value" };

/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = { key: 1, key2: 2 };

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = { key: "value" };
let numberMap: Map<number> = { key: 1 };
let booleanMap: Map<boolean> = { key: true };

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = { key: "value" };

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

function gotoSchool(user: User<Student>) {
  if (user.profile.type !== "student") {
    console.log("잘 못 오셨습니다");
    return;
  }

  console.log(`${user.name}님은 ${user.profile.school}에 다닙니다.`);
}

interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "김아무개",
  profile: { type: "developer", skill: "typescript" },
};

const studentUser: User<Student> = {
  name: "이아무개",
  profile: { type: "student", school: "highschool" },
};

console.log(developerUser, studentUser);

// gotoSchool(developerUser);
gotoSchool(studentUser);
