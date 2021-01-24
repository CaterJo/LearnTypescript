{
  type State = {
    state: string;
  };

  interface LoadingState extends State {
    state: 'loading';
  }

  interface SuccessState extends State {
    state: 'success';
    response: {
      body: string;
    };
  }
  interface FailStatus extends State {
    state: 'fail';
    reason: string;
  }

  type ResourceLoadState = SuccessState | FailStatus | LoadingState;
  type ReulstState = 'no network' | 'loaded' | 'loading...';
  const result: {
    [state: string]: ReulstState;
  } = {
    fail: 'no network',
    success: 'loaded',
    loading: 'loading...',
  };

  const printLoadingState = (state: ResourceLoadState): void => {
    switch (state.state) {
      case 'fail':
        console.log(`${state.reason}`);
        break;
      case 'success':
        console.log(`${state.response.body}`);
        break;
      case 'loading':
        console.log(`loaded`);
      default:
        throw new Error('unknow error...');
    }
  };
}
