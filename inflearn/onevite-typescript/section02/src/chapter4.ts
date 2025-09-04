// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "황성진",
  nickname: "hsungjin",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "김아무개",
  nickname: "kim",
  bio: "안녕하세요",
  location: "서울",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "KR",
  UnitedStates: "US",
  UnitedKingdom: "UK",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
};
