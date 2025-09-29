/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(
      `${this.name}이(가) 움직입니다. 속도는 ${this.moveSpeed}입니다.`
    );
  }
}
