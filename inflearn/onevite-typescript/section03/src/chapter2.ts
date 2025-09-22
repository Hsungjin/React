/**
 * Unknown 타입
 */

function unknownExam() {
  let a: unknown;

  a = 1;
  a = "hello";
  a = true;
  a = null;
  a = undefined;
  a = {};
  a = () => {};
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("void");
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;

  undefinedVar = anyVar;
}
