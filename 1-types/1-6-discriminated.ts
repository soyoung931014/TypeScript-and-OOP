{
     /*
    * discriminated Union: 같은 키값, 다른 state 
    * 📝 function: login -> success, fail
    */
     type SuccessState = {
    👉  result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
    👉   result: 'fail'
        reason: string;
    }
    
    type LoginState = SuccessState | FailState;
                                                // Promise<LoginState>
    function login(id: string, password: string):  LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!!'
            }
        }
    }

    // printLoginState(state: LoginState)
    // 아무것도 리턴하지 않음, console.log만 리턴가능 => void사용
    // success -> 🎉 body
    // fail -> 😂  reason
    function printLoginState(state: LoginState) {
     state.result // success or fail 
    //  이제 공통적으로 result라는 값을 가지고 있으므로 타입스크립트가 이제 알고있다. 이제 성공일수도있고 실패일수도 있지만
    // 접근 가능하다는걸 알 수 있다.
      if (state.result === 'success') {
        console.log(`🎉, ${state.response.body}`); 
      } else {
        console.log(`😭,  ${state.reason}`);
      }
    }
}