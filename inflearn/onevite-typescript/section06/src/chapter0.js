/**
 * 클래스
 */

let studentA = {
  name: "황성진",
  grade: "A",
  age: 28,

  study() {
    console.log("공부합니다.");
  },
  introduce() {
    console.log("안녕하세요.");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("공부합니다.");
  }

  introduce() {
    console.log(`안녕하세요. 저는 ${this.name}입니다.`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  skill;

  // 생성자
  constructor(name, grade, age, skill) {
    super(name, grade, age);
    this.skill = skill;
  }

  // 메서드
  develop() {
    console.log(`${this.skill}로 개발합니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("김아무개", "B", 28);
console.log(studentB);
studentB.study();
studentB.introduce();

let studentC = new StudentDeveloper("이아무개", "C", 28, "JavaScript");
console.log(studentC);
studentC.study();
studentC.introduce();
studentC.develop();