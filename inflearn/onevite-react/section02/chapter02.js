function returnTrue() {
    return true;
}

function returnFalse() {
    return false;
}

console.log(returnTrue() || returnFalse());
console.log(returnTrue() && returnFalse());


// 단락 평가 활용 사례
function printName(person) {
    const name = (person && person.name);
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "황성진" });