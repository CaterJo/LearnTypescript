/**
 * @description last in first out, 연결노드
 */
{
  interface StackInterface<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T | undefined;
  }

  class StackNode<T> {
    next: StackNode<T> | null = null;
    constructor(public readonly value: T) {}
  }

  class Stack<T> implements StackInterface<T> {
    /**
     * @description 해당 스텍의 사이즈이자 위치
     */
    private _size = 0;
    /**
     * @description 해당 스택의값
     */
    private head: StackNode<T> | null;

    constructor(private capacity: number) {}

    get size(): number {
      return this.size;
    }

    /**
     * @description 현재 해드의 값을 반환한다. 다음 노드를 head로 지정한다.
     */
    pop(): T {
      if (this.head === null) {
        throw new Error('Stack is empty!');
      }

      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }

    /**
     * @description 새로운 노드를 생성하고 현재의 head를 다음 값으로 등록한다.
     * @param value
     */
    push(value: T): void {
      if (this._size === this.capacity) {
        throw new Error('stack over flow');
      }

      const node = new StackNode<T>(value);
      node.next = this.head;
      this.head = node;
      this._size++;
    }
  }

  class Person {
    constructor(public name: string, public age: number) {}
  }

  const personStack = new Stack<Person>(10);
  const cater = new Person('cater', 10);
  const peter = new Person('peter', 22);
  const johon = new Person('johon', 50);

  personStack.push(cater);
  personStack.push(peter);
  personStack.push(johon);
  console.log(personStack.size);

  const p: Person = personStack.pop();

  console.log(`Name: ${p.name}`);
}
