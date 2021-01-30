{
  interface StackInterface {
    readonly size: number;
    push(value: string): void;
    pop(): string | undefined;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class Stack implements StackInterface {
    private node: { [props: number]: string | undefined } = {};
    private _size: number;
    private head?: StackNode;

    constructor(private capacicy: number = 0) {}

    get size(): number {
      return this._size;
    }

    push(value: string) {
      if (this.size === this.capacicy) {
        throw new Error('Stack over flow');
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (!this.head) {
        throw new Error('Stack is empty');
      }

      const node: StackNode = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new Stack(10);

  console.log(stack.size);
  stack.push('a');
  stack.push('b');
  stack.push('c');
  stack.push('b');
  stack.push('b');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
