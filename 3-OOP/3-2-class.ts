{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker { // 클래스를 만든다는것: 서로 관련있는 데이터나 함수를 한 곳에 묶어 놓는 기능을 말한다. 그리고 청사진 템플릿을 만드는 기능도 한다. 
    
        static BEANS_GRAMM_PER_SHOT:number = 7; // 
        coffeeBeans: number = 0;
        
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
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

    const maker = new CoffeeMaker(32);
    console.log(maker) // 콘솔로그 찍었을때 함수는 안뜨나보다 CoffeeMaker { coffeeBeans: 32 }
    console.log(maker.makeCoffee(3)) // { shots: 3, hasMilk: false }
    console.log(CoffeeMaker.makeMachine(5)) // CoffeeMaker { coffeeBeans: 5 }
    const maker2 = new CoffeeMaker(14);
    console.log(maker2)

    CoffeeMaker.makeMachine // static을 사용함으로서 class level이기 때문
} 