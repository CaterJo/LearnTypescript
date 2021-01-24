/**
 * @description 상속
 */
{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?:boolean
    }

    interface CoffeeMaker {
        makeCoffee(shots:number ): CoffeeCup
    }


    /**
     * @description 
     * @param {number} coffeeBean : 커피빈
     */
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // static level
        private static CAPACITY:number = 100; // 커피빈 수용량
        private static MAX:number = 10; // 최대 커피머신 생성 수
        private static RUNNING_COUNT:number = 0; // 현재 운영중인 커피머신
        private coffeeBean:number;
        
        /**
         * @description 커피메이커 생성
         * constructor를 private으로 막아서 직접 인스턴스를 생성하는 것을 막았습니다.
         * @param {number} coffeeBean 커피빈
         */
        protected constructor(coffeeBean:number = 0){
            this.coffeeBean = coffeeBean;
        }

        /**
         * @description static 메서드 인스턴스를 생성하지 않아도 호출 가능합니다.
         * static 메서드를 통해서 인스턴스를 생성하면 인스턴스 생성을 제한할 수 있습니다. 
         * @note 최대 운영가능한 커피머신은 10대입니다.
         * @param coffeeBeans 
         */
        static makeMachine(coffeeBeans: number):CoffeeMachine {

            if(CoffeeMachine.MAX <CoffeeMachine.RUNNING_COUNT){
                throw new Error('running count is max...')
            }
            return new CoffeeMachine(coffeeBeans);
        }

        /**
         * @description 원두를 채운다.
         * @param coffeeBean 
         */
        public fillCoffeeBean (coffeeBean: number) {

            if(coffeeBean < 0){
                throw new Error('value for beans should be greater than 0')
            } else if(CoffeeMachine.CAPACITY < this.coffeeBean + coffeeBean){
                throw new Error('Too much beans...')
            } else {
                this.coffeeBean += coffeeBean;
            }
        }

        /**
         * 
         */
        public clean() {
            console.log('cleaning the machine...')
        }
        /**
         * @description 원두 갉기
         * @param shots 
         */
        private gridBeans(shots:number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBean < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT ){
                throw new Error('Not enough coffee')
            }
            this.coffeeBean -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        /**
         * @description 예열
         */
        private preheat(): void {
            console.log('heating up... ')
        } 

        /**
         * @description 추출
         * @param shots 
         */
        private extract(shots: number ):CoffeeCup {

            console.log(`Pulling ${shots} shots...`)
            return {
                shots,
                hasMilk: false
            }
        } 

     
        /**
         * @description 커피를 만든다.
         * @param shots 
         */
        public makeCoffee (shots: number):CoffeeCup {
            this.gridBeans(shots);
            this.preheat();

            return this.extract(shots);
           
        }
    }

    

    class CaffeeLatteMachine  extends CoffeeMachine{

        private constructor(beans:number, public readonly serialNumber:string) {
            // 자식의 생성자함수를 구현하는 경우 부모의 생성자함수를 실행해야한다. 
            super(beans);
        }

        /**
         * @description 우유를 예열한다.
         */
        private steamMilk():void {
            console.log('Steaming some Milk')
        }

        static  makeLatteMachine (beans:number,  serialNumber:string){

            return new CaffeeLatteMachine(beans,serialNumber);
        }

       
        public makeCoffee(shots:number) :CoffeeCup {

            const coffee = super.makeCoffee(shots);

            // 확장된 CaffeeLatteMachined에서 추가 된 기능.
            this.steamMilk();

            return {
                ...coffee,
                hasMilk:true
            }
        }

    }


    /**
     * @description 스위트 커피 메이커
     */
    class SweetCoffeeMaker extends CoffeeMachine{

        makeCoffee(shots:number) :CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true
            }
        }
    }

   


    const machine = CoffeeMachine.makeMachine(23);
    const lateMachine = CaffeeLatteMachine.makeLatteMachine(23, 'serialNum999');
    const coffee = lateMachine.makeCoffee(1);
    console.log(coffee)


    const machines: CoffeeMaker[] =[
        CoffeeMachine.makeMachine(16),
        CaffeeLatteMachine.makeLatteMachine(23, 'serialNum999'),
        SweetCoffeeMaker.makeMachine(16)
    ]


    // 내부적으로 구현된 다양한 클래스들이 한가지 인터페이스를 상속받아, 동일한 함수를 호출할 수 있다.
    // 즉 CoffeMaker 인터페이스를 상속받은 모든 클래스는 makeCoffee 메서드가 있다는 것을 보장한다.
    // 하지만 각각 다른 커피를 만든다. 이것이 다형성이라는 객체지향 프로그램이의 특징이다.
    // 부모클래스나 인터페이스에 있는 함수를 자식 크랠스에서 다양하게 구현함으로서 다형성을 제공할 수 있다.
    // 또 동일한 api를 호출함으로서 클래스의 사용자가 기능을 쉽게 사용할 수 있다.
    machines.forEach(machine => {
        console.log('--------------------------------');
        machine.makeCoffee(1);
    })

}
