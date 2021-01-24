/**
 * 추상화
 * 특정한 기능한 자식클래스에서 기능이 달라지는 경우
 *
 */
{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * @description
   * 추상 클래스로 이 클래스는 직접 인스턴스를 생성하지 못하며 추상클래스를 상속받아 구체화된 자식 클래스를 생성하는 것을 유도한다.
   * 추상메서드를 선언하여 자시클래스에서 구체화하도록 한다.
   */
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // static level
    private static CAPACITY = 100; // 커피빈 수용량
    private static MAX = 10; // 최대 커피머신 생성 수
    private static RUNNING_COUNT = 0; // 현재 운영중인 커피머신
    private coffeeBean: number;

    /**
     * @description 커피메이커 생성
     * @param {number} coffeeBean 커피빈
     */
    constructor(coffeeBean = 0) {
      this.coffeeBean = coffeeBean;
    }

    /**
     * @description 원두를 채운다.
     * @param coffeeBean
     */
    public fillCoffeeBean(coffeeBean: number) {
      if (coffeeBean < 0) {
        throw new Error('value for beans should be greater than 0');
      } else if (CoffeeMachine.CAPACITY < this.coffeeBean + coffeeBean) {
        throw new Error('Too much beans...');
      } else {
        this.coffeeBean += coffeeBean;
      }
    }

    /**
     *  @description 메이커 청소
     */
    public clean() {
      console.log('cleaning the machine...');
    }

    /**
     * @description 원두 갉기
     * @param shots
     */
    private gridBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBean < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee');
      }
      this.coffeeBean -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    /**
     * @description 예열
     */
    private preheat(): void {
      console.log('heating up... ');
    }

    /**
     * @description  추상 메서드로서 이 클래스를 상속받는 자식 클래스에서 직접 구현해야한다.
     * @param shots
     */
    protected abstract extract(shots: number): CoffeeCup;

    /**
     * @description 커피를 만든다.
     * @param shots
     */
    public makeCoffee(shots: number): CoffeeCup {
      this.gridBeans(shots);
      this.preheat();

      return this.extract(shots);
    }
  }

  /**
   *  @description
   */
  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      // 자식의 생성자함수를 구현하는 경우 부모의 생성자함수를 실행해야한다.
      super(beans);
    }

    /**
     * @description 우유를 예열한다.
     */
    private steamMilk(): void {
      console.log('Steaming some Milk');
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  /**
   * @description 스위트 커피 메이커, 추상메서드만 직접 구현하며 된다.
   */
  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CaffeeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('--------------------------------');
    machine.makeCoffee(1);
  });
}
