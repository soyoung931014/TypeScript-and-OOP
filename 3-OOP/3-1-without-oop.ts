{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    const BEANS_GRAMM_PER_SHOT:number = 7; // const BEANS_GRAMM_PER_SHOT: number = 7 이렇게 보통 써주는데 원시타입에서 숫자를 할당하는 경우 '타입 추론'을 통해 생략가능
    let coffeeBeans: number = 0;

    function makeCoffee(shots: number): CoffeeCup {
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots, //shots: shots,
            hasMilk: false
        };
    }
    coffeeBeans = 3 * BEANS_GRAMM_PER_SHOT; //커피 콩 충분히 담기
    console.log(coffeeBeans)
    const coffee = makeCoffee(2); // 샷 내리기
    console.log(coffee);
    console.log(coffeeBeans) // 샷 내린 후 남은 콩량
}