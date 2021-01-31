{
  type Video = {
    title: string;
    author: string;
  };

  /**
   * @description 모든 타입을 옵셔널 타입으로 만든다. for in 과 유사하다.
   */
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  /**
   * @description 모든 타입을 리드온리 타입으로 만든다.
   */
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type OptoinalVideo = Optional<Video>;

  type ReadonlyVideo = Readonly<Video>;

  const video: OptoinalVideo = {
    title: '드래곤볼',
  };

  const readonlyVido: ReadonlyVideo = {
    title: '원피스',
    author: '오다',
  };

  // 모든 속성이 readonly가 되었다.
  readonlyVido.author = '육다';

  // 모든 타입을 null이 가능한 타입으로 만든다.
  type Nullable<T> = { [P in keyof T]: T[P] | null };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
