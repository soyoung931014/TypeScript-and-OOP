{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    //public
    //private : 외부접근 불가
    //protected: 나중에 상속을 할때 외부에서는 접근이 불가능 하지만 클래스를 상속한 자식 클래스에서만 접근가능

    class CoffeeMaker { 
     
        private static BEANS_GRAMM_PER_SHOT:number = 7; // 
        private coffeeBeans: number = 0;
        
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans; 
        }
        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots, //shots: shots,
                hasMilk: false
            };
        }
    }
    
    const maker = CoffeeMaker.makeMachine(32) 
    maker.fillCoffeeBeans(50)
    console.log(maker)
    
    
} 
