/**
 * https://vallista.kr/2020/05/22/TypeScript-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-%EC%98%B5%EC%A0%80%EB%B2%84-%ED%8C%A8%ED%84%B4/
 */

export interface IObserver {
  notifyAddTodo(message: string): void;
  notifyRemoveTodo(): void;
}

export class Subject {
  private observerCollection: IObserver[];

  constructor() {
    this.observerCollection = [];
  }

  registration(observer: IObserver) {
    this.observerCollection.push(observer);
  }

  notifyAddTodo(message: string) {
    this.observerCollection.forEach((observer) => {
      observer.notifyAddTodo(message);
    });
  }

  notifyRemoveTodo() {
    this.observerCollection.forEach((observer) => {
      observer.notifyRemoveTodo();
    });
  }
}
