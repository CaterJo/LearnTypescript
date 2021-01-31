/**
 * https://vallista.kr/2020/06/07/TypeScript-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-%EB%A9%94%EB%A9%98%ED%86%A0-%ED%8C%A8%ED%84%B4/
 */

class Originator {
  public state1: string;
  public state2: string;

  constructor(state1: string, state2: string) {
    this.state1 = state1;
    this.state2 = state2;
  }

  createMemento(): Memento {
    return new Memento(this.state1, this.state2);
  }

  restoreMemento(memento: Memento): void {
    this.state1 = memento.state1;
    this.state2 = memento.state2;
  }
}

class Memento {
  readonly state1: string;
  readonly state2: string;

  constructor(state1: string, state2: string) {
    this.state1 = state1;
    this.state2 = state2;
  }
}

class CareTaker {
  private memento: Memento[] = [];

  saving(originator: Originator): void {
    this.memento.push(originator.createMemento());
  }

  restoring(originator: Originator): void {
    if (this.memento.length === 0) return;

    originator.restoreMemento(this.memento[this.memento.length - 1]);
  }
}

const originator: Originator = new Originator('first', 'one');

const careTaker: CareTaker = new CareTaker();

careTaker.saving(originator);

originator.state1 = 'second';
originator.state2 = 'two';

console.log(originator);

careTaker.restoring(originator);

console.log(originator);
