// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1 && !f2 && !f3 && !f4 && !f5 && !f6 && !f7) {
    console.log("falsy");
}



// 2. Truthy한 값
// 7가지의 Falsy한 값을 제외한 모든 값은 Truthy한 값이다.
let t1 = true;
let t2 = "0";
let t3 = "false";
let t4 = [];
let t5 = {};
let t6 = () => {};

if (t1 && t2 && t3 && t4 && t5 && t6) {
    console.log("truthy");
}



// 3. 활용 사례

function printName(person) {
  if (typeof person === "undefined" || person === null) {
    console.log("person is not defined without falsy check");
    return;
  }

  if (!person) {
    console.log("person is not defined");
    return;
  }
  
  console.log(person.name);
}

// let person = { name: "황성진" };
// let person;
let person = null;

printName(person);