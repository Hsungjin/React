function add10(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = num + 10;
    
            if (typeof result === "number") {
                resolve(result);
            } else {
                reject("숫자가 아닙니다.");
            }
        }, 2000);
    });

    return promise;
}

add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });