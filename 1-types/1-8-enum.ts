{
    /*
     * Enum 
    다른 프로그래밍 언어에서도 굉장히 흔하게 쓰이는 타입이다. 하지만 자바스크립트에는 없다.
    여러가지에 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입을 말한다.
     */

    //Javascript 
    // 자바스크립트에서 상수를 정의할 때는 한 번 정해지면 바뀌지 않는 어떤 특정한 고정 값을 
    // 나타낼때 대문자 형태로 사용한다.
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    // 관련된 요일에 상수를 정의하는 경우에 서로 연관되어져 있지만 이것들을 묶을 수 있는
    // 타입이 따로 존재하지 않는다. 그래서 최대한 enum에 가깝게 표현할 수 있는 방법으로는
    // object.freeze()라는 API (사용 한번만 정의할 수있게 만듬)

    const DAYS_ENUM = Object.freeze({'MONDAY': 0, 'TUESDAY': 1, 'WEDNESDAY': 2})
    const dayOfToday = DAYS_ENUM.MONDAY // 이제 변수에는 Monday의 값인 0이 할당될것임


    // typeScript : enum의 대부분은 union타입으로 대체 가능하다.
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'
    enum Days {
        Monday, // 0  // 디폴트가 0임. 만약 Monday를 1부터 시작하고 싶으면 1을 할당해주면 아래것들 자동으로 생김
        Tuesday = 'tue', // 1 // 또한 문자열을 할당해주고 싶다면 일일히 할당해주면 된다.
        Wednesday = 'w', // 2
        Thursday = 't',
        Friday = 'f',
        Saturday = 's',
        Sunday = 's'
    }
    console.log(Days.Tuesday);
    let day: Days = Days.Saturday;
    day = Days.Tuesday; 
    day = 10 // ⭐️ enum의 문제점: 숫자 아무거나 적어도 오류 안남(즉 타입이 보장안됨)
    console.log(day)

    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Tuesday'; // dayOfweek = 'elle' (x) type 안에 있는것만 가능
   
}