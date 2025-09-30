/**
 * 프로미스
 */
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
});
promise.then((message) => console.log(message));
export {};
