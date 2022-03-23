{
    /*
    * Type Assertions💩 
    */
    function jsStrFunc(): any {
        return 'hello';
    };
    const result = jsStrFunc();
    console.log((result as string).length) // 5
    console.log((<string>result).length)

    // 반대로 jsStrFunc의 리턴값이 문자열인걸 확신하는데 실제로 return은 숫자라면??? undefined 뜸
    
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 서버죽음

    function findNumber(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumber(); 
   // numbers.push(2); // number[]일수도 있고 undefined일 수 도 있기떄문에 push 안됨. 오류뜸
   // 근데 만약... 나는 이게 배열인걸 확신해! 라고 할때는  확신의 !를 사용해주자
    numbers!.push(2);


}