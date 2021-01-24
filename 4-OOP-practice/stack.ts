/**
 * @description last in first out, 연결노드
 */

interface StackInterface {
  readonly length: number;
  push(value: string): void;
  pop(): string | undefined;
}

class Stack implements StackInterface {
  private head = -1;
  private node: { [props: number]: string | undefined } = {};

  constructor(size?: number) {
    if (size) {
      let i;
      this.head = size - 1;
      for (i = 0; size > i; i++) {
        this.node[i] = undefined;
      }
    }
  }

  get length(): number {
    return this.head + 1;
  }

  pop(): string | undefined {
    return this.node[this.head--];
  }

  push(value: string) {
    ++this.head;
    this.node[this.head] = value;
  }
}

const stack = new Stack();

console.log(stack.length);
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('b');
stack.push('b');

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.length);
