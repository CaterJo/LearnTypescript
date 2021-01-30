{
  /**
   * 에러를 캐치해서 수행할 일이 없다면 캐치하지 않는 것이 낫다.
   * 그래야 에러가 상위 콜스택으로 이동하며 실제로 에러를 처리하는 곳에서 핸들링을 할 수 있다.
   */

  // instanceof로 catch문에서 구분을 할 수 없다.
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network');
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
        console.log(`catched ${error}`);
      }
    }
  }

  const client = new NetworkClient();

  const service = new UserService(client);

  const app = new App(service);

  app.run();
}
