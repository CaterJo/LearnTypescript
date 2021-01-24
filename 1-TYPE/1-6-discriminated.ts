{
  // function login -> success, fail
  /**
   * @description 공통 타입인 result를 부여한다.
   */
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailStatus = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailStatus;

  const login = (id: string, password: string): LoginState => {
    return {
      result: 'success',
      response: {
        body: '',
      },
    };
  };

  const printLoginState = (state: LoginState) => {
    if (state.result === 'success') {
      console.log('S');
    } else {
      console.log('F');
    }
  };
}
