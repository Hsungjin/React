// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없을을 의미하는 타입

function func1(): string {
  return "hello";
}

func1();

function func2(): void {
  console.log("func2");
}

func2();

function func3(): undefined {
  console.log("func3");
  return undefined;
  return;
}

func3();

function func4(): null {
  console.log("func4");
  return null;
}

func3();

let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = null;
a = undefined;

// never
// never -> 존재하지 않는
// 불가능한 타입

function func5(): never {
  while (true) {}
}

function func6(): never {
  throw new Error("error");
}

let anyVar: any;

let q: never;
// q = 1;
// q = "hello";
// q = {};
// q = null;
// q = undefined;
// q = anyVar;

