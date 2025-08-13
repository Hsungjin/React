// 1. Date 객체를 생성하는 방법
let date1 = new Date();
console.log(date1);

let date2 = new Date("2025-01-01");
console.log(date2);

let date3 = new Date("2025-01-01T12:00:00");
console.log(date3);

let date4 = new Date(2025, 0, 1, 12, 0, 0);
console.log(date4);

// 2. 타임 스탬프
// 특정 시간이 1970년 1월 1일 0시 0분 0초로(협정 세계시) 몇 밀리초가 지났는지를 나타내는 숫자
let timestamp1 = Date.now();
console.log(timestamp1);

let timestamp2 = new Date().getTime();
console.log(timestamp2);

let date5 = new Date(timestamp1);
console.log(date5);

let date6 = new Date(timestamp2);
console.log(date6);

// 3. 시간 요소를 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let day = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
let millisecond = date1.getMilliseconds();

console.log(year, month, day, hour, minute, second, millisecond);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(11);
date1.setDate(31);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
date1.setMilliseconds(999);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleDateString());