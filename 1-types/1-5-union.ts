{
  /*
   * Union Types : OR
  */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const title:TileSize = 8;

    /*
    * 📝 function: login -> success, fail
    */
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    }
    
    type LoginState = SuccessState | FailState;
                                                // Promise<LoginState>
    function login(): LoginState {
        return {
            response: {
                body: 'logged in!!',
            },
        };
    }

    // printLoginState(state: LoginState)
    // 아무것도 리턴하지 않음, console.log만 리턴가능 => void사용
    // success -> 🎉 body
    // fail -> 😂  reason
    function printLoginState(state: LoginState) {
      //  state.reason, state.response를 해도 타입스크립트는 모른다.
      // 왜냐면 LoginState라는것은 success or fail만 가능하기 때문
      // 그래서 코드를 작성하는 시점에는 어떤게 있는지 모른다는것..
      // 그래서 보편적으로 사용하는 방법...
      if ('response' in state) {
        console.log(`🎉, ${state.response.body}`); // state안에 있는 response에 접근 가능하다.
      } else {
        console.log(`😭,  ${state.reason}`);
      }
    }    
    
}