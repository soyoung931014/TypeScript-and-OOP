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
    * ๐ function: login -> success, fail
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
    // ์๋ฌด๊ฒ๋ ๋ฆฌํดํ์ง ์์, console.log๋ง ๋ฆฌํด๊ฐ๋ฅ => void์ฌ์ฉ
    // success -> ๐ body
    // fail -> ๐  reason
    function printLoginState(state: LoginState) {
      //  state.reason, state.response๋ฅผ ํด๋ ํ์์คํฌ๋ฆฝํธ๋ ๋ชจ๋ฅธ๋ค.
      // ์๋๋ฉด LoginState๋ผ๋๊ฒ์ success or fail๋ง ๊ฐ๋ฅํ๊ธฐ ๋๋ฌธ
      // ๊ทธ๋์ ์ฝ๋๋ฅผ ์์ฑํ๋ ์์ ์๋ ์ด๋ค๊ฒ ์๋์ง ๋ชจ๋ฅธ๋ค๋๊ฒ..
      // ๊ทธ๋์ ๋ณดํธ์ ์ผ๋ก ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ...
      if ('response' in state) {
        console.log(`๐, ${state.response.body}`); // state์์ ์๋ response์ ์ ๊ทผ ๊ฐ๋ฅํ๋ค.
      } else {
        console.log(`๐ญ,  ${state.reason}`);
      }
    }    
    
}