/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "green" | "blue";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = "red-dog";

console.log(coloredAnimal);