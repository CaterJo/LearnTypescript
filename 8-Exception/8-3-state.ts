{
  /**
   * 에러를 캐치해서 수행할 일이 없다면 캐치하지 않는 것이 낫다.
   * 그래야 에러가 상위 콜스택으로 이동하며 실제로 에러를 처리하는 곳에서 핸들링을 할 수 있다.
   */

  interface ErrorState {
    result: 'success' | 'faile';
  }

  interface NetworkErrorState extends ErrorState {
    result: 'faile';
    reason: 'offline' | 'server down' | 'timeout';
  }

  interface SuccesState extends ErrorState {
    result: 'success';
  }

  class TimeoutError extends Error {
    public result: 'success' | 'faile' = 'faile';
    public reason = 'timeout';

    constructor(public message: string) {
      super(message);
    }
  }
  class OfflineError extends Error {
    public result: 'success' | 'faile' = 'faile';
    public reason = 'offline';

    constructor(public message: string) {
      super(message);
    }
  }

  type ResultState = SuccesState | NetworkErrorState;

  class NetworkClient {
    constructor(private loginData: { id: string; pw: string }) {}

    tryConnect(): ResultState {
      const timeout = 3000;

      const t = 2000;
      const isLogout = true;

      if (timeout < t) {
        throw new TimeoutError(`timeout, max timeout is ${timeout}ms`);
      } else if (isLogout) {
        throw new OfflineError('login other device');
      } else {
        throw new Error('no network');
      }
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch (error) {
        // send error message to server

        console.log(`Erorr reason:  ${error.reason}`);
        console.log(`Erorr message: ${error.message}`);
      }
    }
  }

  const client = new NetworkClient({
    id: 'chuchu',
    pw: '123213',
  });

  const service = new UserService(client);

  const app = new App(service);

  app.run();
}
