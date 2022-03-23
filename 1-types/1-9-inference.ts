{
   /* 
    * Type Inference 
   */
  let text = 'hello';
                    // 디폴트값 설정, 디폴트 값으로 문자열 할당했기 떄문에 
                   /*  따로 타입을 설정해주지 않았지만 이 메세지는 string 타입인걸 알 수 있다. */
  function print(message = 'hello') { // message: string (이렇게 해도됨)
      console.log(message);
  } 
  print('hell');
  // print(1) (x)

                                    // 타입을 꼭 명시해주자.
  function add(x: number, y: number): number {
      return x + y;
  }
  const result = add (1,2);


}