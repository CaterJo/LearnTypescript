// ImperativeAndProceduralPrgramming
/**
 * @description 절차지향으로 커피머신을 만들어본다.
 * makeCoffee 함수는 외부 변수 coffeeBean를 직접 변경한다. 즉 연결성을 갖는다.
 * 이렇게 외부변수를 직접 변경하는 순수하지 않은 함수가 많을수록 코드가 읽기 어려워진다.
 */
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT = 7;

  let coffeeBean = 0;

  const makeCoffee = function (shots: number): CoffeeCup {
    if (coffeeBean < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee');
    }

    coffeeBean -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  };

  coffeeBean += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
