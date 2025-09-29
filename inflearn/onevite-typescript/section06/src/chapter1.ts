/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "황성진",
  age: 28,
  position: "developer",
  work() {
    console.log("일을 합니다.");
  },
};

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일을 합니다.");
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  work() {
    console.log("일을 합니다.");
    console.log(`사무실 번호는 ${this.officeNumber}입니다.`);
  }
}

const employeeB = new Employee("황성진", 28, "developer");
console.log(employeeB);
employeeB.work();

const employeeC: Employee = {
  name: "황성진",
  age: 28,
  position: "developer",
  work() {
    console.log("일을 합니다.");
  },
};

const employeeD = new ExecutiveOfficer("황성진", 28, "developer", 100);
console.log(employeeD);
employeeD.work();
