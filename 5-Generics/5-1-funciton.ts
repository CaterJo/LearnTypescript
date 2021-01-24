{
  /**
   *@description 해당값이 null이 아닌것을 보장한다.
   * @param arg
   */
  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) {
      throw Error('not valid number!');
    }

    return arg;
  }

  // 제네릭으로 인해 반환값을 지정됨
  const result: number = checkNotNull(123);

  const str: string = checkNotNull('abc');

  console.log(result);
  console.log(str);

  checkNotNull(null);
}
