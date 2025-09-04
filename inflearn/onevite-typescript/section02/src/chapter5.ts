// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 10,
  USER,
  GUEST,
}

enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
}

const user1 = {
  name: "황성진",
  role: Role.ADMIN, // 0: 관리자
  language: Language.KOREAN,
};

const user2 = {
  name: "김아무개",
  role: Role.USER, // 1: 일반 사용자
  language: Language.ENGLISH,
};

const user3 = {
  name: "이아무개",
  role: Role.GUEST, // 2: 게스트
  language: Language.KOREAN,
};

console.log(user1, user2, user3);
