// ImperativeAndProceduralPrgramming
/**
 * @description interface를 통해 클래스를 정형화한다.
 */
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker extends CoffeeMaker {
    fillCoffeeBean(beans: number): void;
    clean(): void;
  }

  /**
   * @description
   * @param {number} coffeeBean : 커피빈
   */
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // static level
    private static CAPACITY = 100; // 커피빈 수용량
    private static MAX = 10; // 최대 커피머신 생성 수
    private static RUNNING_COUNT = 0; // 현재 운영중인 커피머신
    private coffeeBean: number;

    /**
     * @description 커피메이커 생성
     * constructor를 private으로 막아서 직접 인스턴스를 생성하는 것을 막았습니다.
     * @param {number} coffeeBean 커피빈
     */
    private constructor(coffeeBean = 0) {
      this.coffeeBean = coffeeBean;
    }

    /**
     * @description static 메서드 인스턴스를 생성하지 않아도 호출 가능합니다.
     * static 메서드를 통해서 인스턴스를 생성하면 인스턴스 생성을 제한할 수 있습니다.
     * @note 최대 운영가능한 커피머신은 10대입니다.
     * @param coffeeBeans
     */
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      if (CoffeeMachine.MAX < CoffeeMachine.RUNNING_COUNT) {
        throw new Error('running count is max...');
      }
      return new CoffeeMachine(coffeeBeans);
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
     *
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
     * @description 추출
     * @param shots
     */
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

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
   * @description 아마추어는 일반 커피머신만 사용 가능하다.
   */
  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  /**
   * @description 인터페이스를 정의함으로써 기능을 제한할 수 있으며 해당 인스턴스의 세부 구현을 신경쓰지 않아도 된다.
   */
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBean(45);
      this.machine.clean();
    }
  }

  const maker = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();
  pro.makeCoffee();
}
