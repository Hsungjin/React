/**
 * 프로미스
 */

let promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((error) => {
  console.log(error);
});
