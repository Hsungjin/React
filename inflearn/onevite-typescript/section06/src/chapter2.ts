/**
 * 접근 제어자
 * access modifier
 * => public, private, protected
 */

class Employee {
  public name: string;
  private age: number;
  protected position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log(`${this.name}일을 합니다.`);
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
    console.log(`${this.name}이(가) 일을 합니다.`);
    console.log(`${this.position}을(를) 합니다.`);
    console.log(`사무실 번호는 ${this.officeNumber}입니다.`);
    // console.log(`${this.age}`);
  }
}

const employee = new Employee("황성진", 28, "developer");
employee.name = "김아무개";
// employee.age = 20;
// employee.position = "designer";

// console.log(employee.age);
// console.log(employee.position);

console.log(employee);
