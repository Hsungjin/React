/**
 * 타입 추론
 */

let a = 10;

// function func(a) {
//   return a;
// }

let b = "hello";

let c = [1, 2, 3, "123"];

let d = {
  name: "John",
  age: 30,
  profile: {
    nickname: "hsungjin",
  },
  urls: ["https://www.google.com", "https://www.naver.com"],
};

let { name, age, profile, urls } = d;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return message;
}

let e;
e = 1;
e.toFixed(2);
e = "hello";
e.toUpperCase();
e = true;
e.toString();
e = null;
e = undefined;
e = {};
e = () => {};

const num = 10;

