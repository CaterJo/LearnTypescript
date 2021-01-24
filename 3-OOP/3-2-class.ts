// ImperativeAndProceduralPrgramming
/**
 * @description class문법을 이용해 객체지향적으로 코드를 작성해본다.
 * 변수를 클래스 내부로 들여오고 static변수와 메서드를 이용해서 메모리를 절약할 수 있다.
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
        static BEANS_GRAMM_PER_SHOT: number = 7; // static level
        static CAPACITY:number = 100; // 커피빈 수용량
        coffeeBean:number;
        
        /**
         * @description 커피메이커 생성
         * @param {number} coffeeBean 커피빈
         */
        constructor(coffeeBean:number = 0){
            this.coffeeBean = coffeeBean;
        }

        /**
         * @description static 메서드 인스턴스를 생성하지 않아도 호출 가능하다.
         * @param coffeeBeans 
         */
        static makeMachine(coffeeBeans: number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        /**
         * @description 원두를 채운다.
         * @param coffeeBean 
         */
        fill (coffeeBean: number) {
            if(CoffeeMaker.CAPACITY> this.coffeeBean + coffeeBean){
                this.coffeeBean += coffeeBean;
            }else{
                throw new Error('Too much beans...')
            }
        }
     
        /**
         * @description 커피를 만든다.
         * @param shots 
         */
        makeCoffee (shots: number):CoffeeCup {
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

    
    const coffeeMaker = new CoffeeMaker(32);
    const coffee = coffeeMaker.makeCoffee(2);
    console.log(coffee)


    const maker3 = CoffeeMaker.makeMachine(3);
}
