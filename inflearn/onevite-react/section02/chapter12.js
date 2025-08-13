function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 1000);
}

add(1, 2, (result) => {
    console.log(result);
});

function orderFood(callback) {
    setTimeout(() => {
        const food = "피자";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownFood = "식은: " + food;
        callback(cooldownFood);
    }, 2000);
}

function freezedFood(food, callback) {
    setTimeout(() => {
        const freezedFood = "냉동식품으로 변환: " + food;
        callback(freezedFood);
    }, 1000);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownFood) => {
        console.log(cooldownFood);

        freezedFood(cooldownFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});