/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List<number>([1, 2, 3]);
numberList.push(4);
numberList.print();
numberList.pop();
numberList.print();

const stringList = new List<string>(["Hello", "World"]);
stringList.push("Hello");
stringList.print();
stringList.pop();
stringList.print();
