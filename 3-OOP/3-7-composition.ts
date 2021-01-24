{
  /**
   * Composition
   * 상속을 사용하지 않아 Class간 커플링을 최소화했다. 인스턴스를 주입하고
   * 주입을 받는 클래스에서는 인스턴스의 인터페이스로 타입을 정의함으로서
   * 규격에 맞는 다양한 인스턴스를 주입받을 수 있다.
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * @description 커피머신 생성자 함수에서 전달받은 MilkFrother, SugarProvider 인스턴스에 의해 기능이 결정된다.
   * @param {number} coffeeBean : 커피빈
   */
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // static level
    private static CAPACITY = 100; // 커피빈 수용량
    private static MAX = 10; // 최대 커피머신 생성 수
    private static RUNNING_COUNT = 0; // 현재 운영중인 커피머신

    /**
     * @description 커피메이커 생성
     * @param {number} coffeeBean 커피빈
     */
    constructor(
      private coffeeBean: number = 0,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
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

      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  /**
   * @description 싸구려 우유
   */
  class CheepMilkSteamer implements MilkFrother {
    /**
     * @description 우유를 예열한다.
     */
    private steamMilk(): void {
      console.log('Steaming some Milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  /**
   * @description 고급 우유
   */
  class FancyMilkSteamer implements MilkFrother {
    /**
     * @description 우유를 예열한다.
     */
    private steamMilk(): void {
      console.log('Fancy Steaming some Milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  /**
   * @description 찬 우유
   */
  class ColdMilkSteamer implements MilkFrother {
    /**
     * @description 우유를 예열한다.
     */
    private steamMilk(): void {
      console.log(' Steaming some Cold Milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  /**
   * @description 우유를 넣지 않는다.
   */
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup) {
      return cup;
    }
  }

  /**
   * @description 설탕 제조기,새로운 기능을 별도의 크래스로 정의하고
   * 다른 클래스에 주입하여 Composition을 통한 기능 확장을한다.
   * 이를 통해 상속관계의 클래스가 좀 더 유연한 관계를 가질 수 있다.
   */
  class CandySugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log('Getting some sugar from candy');

      // 복잡한 로직이라 가정..
      return true;
    }

    /**
     * @description 설탕에 커피를 추가한다.
     * @param cup
     */
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();

      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log('Getting some sugar from jar!!!!!');

      // 복잡한 로직이라 가정..
      return true;
    }

    /**
     * @description 설탕에 커피를 추가한다.
     * @param cup
     */
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();

      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // Suager
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // MILK
  const cheepMilkSteamer = new CheepMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // SweetCoffeeMaker에 각각 다른 객체를 전달함으로서 다른 인스턴스를 생성할 수 있다.
  const sweetCandyMachine = new CoffeeMachine(30, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(30, noMilk, sugar);

  // 우유가 필요없는 경우는 noSugar 인스턴스를 전달한다.
  const cheepLateMachine = new CoffeeMachine(23, cheepMilkSteamer, noSugar);
  const fancyMachine = new CoffeeMachine(23, fancyMilkMaker, noSugar);
  const coldMachine = new CoffeeMachine(23, coldMilkMaker, noSugar);
}
