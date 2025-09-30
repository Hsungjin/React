/**
 * 제네릭 인터페이스
 */
let keyPair = { key: "key", value: 1 };
let keyPair2 = { key: true, value: "value" };
let numberMap1 = { key: 1, key2: 2 };
let stringMap = { key: "value" };
let numberMap = { key: 1 };
let booleanMap = { key: true };
let stringMap2 = { key: "value" };
function gotoSchool(user) {
    if (user.profile.type !== "student") {
        console.log("잘 못 오셨습니다");
        return;
    }
    console.log(`${user.name}님은 ${user.profile.school}에 다닙니다.`);
}
const developerUser = {
    name: "김아무개",
    profile: { type: "developer", skill: "typescript" },
};
const studentUser = {
    name: "이아무개",
    profile: { type: "student", school: "highschool" },
};
console.log(developerUser, studentUser);
// gotoSchool(developerUser);
gotoSchool(studentUser);
export {};
