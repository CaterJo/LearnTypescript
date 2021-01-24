// ImperativeAndProceduralPrgramming
/**
 * @description 이전 단계에서 문제점을 개선한 예제이다. 
 * 접근 제한자를 이용해서 외부에서 접근이 불가능한 변수(캡슐화) 접근 가능한 변수를 구분한다. 
 * 
 * public: 누구나 접근 가능함
 * protected: 클래스를 상속한 객체는 접근 가능함
 * private: 아무도 접근 못함
 */
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    /**
     * @description 
     * @param {number} coffeeBean : 커피빈
     */
    class CoffeeMaker {
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
        private constructor(coffeeBean:number = 0){
            this.coffeeBean = coffeeBean;
        }

        /**
         * @description static 메서드 인스턴스를 생성하지 않아도 호출 가능합니다.
         * static 메서드를 통해서 인스턴스를 생성하면 인스턴스 생성을 제한할 수 있습니다. 
         * @note 최대 운영가능한 커피머신은 10대입니다.
         * @param coffeeBeans 
         */
        static makeMachine(coffeeBeans: number):CoffeeMaker {

            if(CoffeeMaker.MAX <CoffeeMaker.RUNNING_COUNT){
                throw new Error('running count is max...')
            }
            return new CoffeeMaker(coffeeBeans);
        }

        /**
         * @description 원두를 채운다.
         * @param coffeeBean 
         */
        public fillCoffeeBean (coffeeBean: number) {

            if(coffeeBean < 0){
                throw new Error('value for beans should be greater than 0')
            } else if(CoffeeMaker.CAPACITY < this.coffeeBean + coffeeBean){
                throw new Error('Too much beans...')
            } else {
                this.coffeeBean += coffeeBean;
            }
        }
     
        /**
         * @description 커피를 만든다.
         * @param shots 
         */
        public makeCoffee (shots: number):CoffeeCup {
            if(this.coffeeBean < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT ){
                throw new Error('Not enough coffee')
            }
     
            this.coffeeBean -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
     
            return {
                shots,
                hasMilk: false
            }
        }
    }

    
    const coffeeMaker = CoffeeMaker.makeMachine(32);
    coffeeMaker.fillCoffeeBean(50);
    const coffee = coffeeMaker.makeCoffee(2);
    console.log(coffee)


    
    class User {
        get fullName():string {
            return `${this.firstName} ${this.lastName}`
        }

        private interalAge = 4;

        get age():number {
            return this.interalAge;
        }

        /**
         * @description 음수를 등록할 수 없습니다.
         */
        set age(num:number){
            if(num < 0){
                throw new Error ('나이는 0보다 커야합니다.')
            }
            this.interalAge = num;
        }

        /**
         * @description 생성자 함수에 접근제한자를 입력하면 클래스 필드를 선언과 동시에 할당이 가능합니다.
         * @param firstName 
         * @param lastName 
         */
        constructor(private firstName:string, private lastName:string) {
        }
    }

    const steve = new User('Steve', 'Jobs');
    steve.age = 10;
    console.log(steve.fullName);
}
