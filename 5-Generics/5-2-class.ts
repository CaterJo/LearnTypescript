{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEiher<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}

    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightValue;
    }
  }

  const eiher: Either<string, number> = new SimpleEiher('apple', 5);

  const str: string = eiher.left();
  const num: number = eiher.right();

  const best = new SimpleEiher({ name: 'baba' }, 20);
  const obj: { name: string } = best.left();
}
