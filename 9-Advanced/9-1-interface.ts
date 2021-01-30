{
  /**
   * type alias와 interface의 차이는 무엇일까?
   */

  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // object: both
  const obj1: PositionType = {
    x: 1,
    y: 2,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 2,
  };

  // ✮ class: both
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // ✮ Extends: both
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  type ZPositionType = PositionType & {
    z: number;
  };

  // Merge: only interface
  //  동일 인터페이스 선언하면 기존 타입정보와 결합된다.
  interface PositionInterface {
    z: number;
  }

  // 기존 인터페이스와 결합되어 z속성을 필수로 입력해야한다.
  const p2: PositionInterface = {
    x: 1,
    y: 2,
  };

  // Only Type: computed properties
  type Person = {
    name: string;
    age: number;
  };

  // 타입에 지정 속성에 접근 할 수 있다.
  type Name = Person['name'];
  type Direnction = 'left' | 'left';
}
