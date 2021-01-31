# Learn Typescript

## Imperative and Procedural Programming

### 1. 사이드 이펙트가 발생할 확률이 높다진다.

- 하나의 객체를 서로 다른 여러 함수에서 수정하기 때문에 추적이 어렵다.

### 2. 프로그램을 한번에 이해하기 어렵다.

## Object Oriented Programming

객체들 끼리 커뮤니케이션하도록 프로그래밍하는 것.

1. 클래스 단위로 개발하며 재사용성이 높아진다.
2. 확장성과 유지보수성이 좋다.
3. 데이터를 가진 변수와 변수를 수정하는 함수로 클래스가 구성된다.
4. 클래스는 데이터와 함수를 묶어놓은 템플릿이라 할 수 있다.

### 캡슐화

### Abstraction 추상화

### Ingeritrance 상속

#### 상속의 문제점

어떤 부모클래스의 메서드를 수정하면 상속의 수직적 구조탓에 자식클래스의 영향이 생긴다.  
또 타입스크립트에서는 한가지 이상의 클래스를 상속할 수 없다.  
수직적 구조로 인한 클래스간 직접적인 연결이 향후에 문제를 야기할 수 있다.

### Polymorphism 다형성

부모로 부터 상속받은 기능이 자식클래스에서 다양한 형태로 선언되어 사용될 수 있음을 의미한다.  
재사용성과 확장성을 의미한다.

### Types

데이터의 형을 지정

### Interface

클래스간의 의존성 주입이 발생하는 경우 직접적인 클래스를 명시하는 대신에
인터페이스를 통해 의사소통하는 것이 의존성을 낮출 수 있다.  
즉 인터페이스는 클래스의 추상적인 규격이라 할 수 있다.  
주입하는 클래스가 정의한 규격과 일치하는지 여부를 보는 것이다.  
콕 집어서 해당 클래스와 일치하는지를 보는것이 아니라.

인터페이스는 클래스간의 커플링을 디커플링 해 줄 수 있다.

### COMPOSITION

상속보다 컴포지션을 통해 기능을 주입받으면 클래스간의 의존성을 낮출 수 있다.  
하지만 Coposition을 통한 의존성 주입은 주입받는 클래스와 주입하는 클래스간의 종속성을 야기한다.  
주입받는 클래스에 주입하는 클래스를 직접 선언하는 대신에 주입 가능한 형식의 클래스를 인터페이스로 만들어 선언한다면 좀 더 유연한 설계가 가능하다.

### Abstract

추상 클래스로 직접 인스턴스를 생성할 수 없다.
따라서 이 클래스 정의를 상속하여 구체호된 자식 클래스를 정의하는 것을 의도한다.  
자식 클래스에서 반드시 구체화하여 사용해야하는 메서드를 추상 메서드로 정의할 수 있다.

### Over Enginearing

재사용성, 확장성에 너무 매몰되어 기능구현을 등한시하게 되는 경우.  
앞으로 발생하지 않을 상황에 대비해서 확장성을 고려해서 코드를 지나치게 복잡하게 만들 필요가 없다.

## Exceptoin Handling

### 1. error

예상 가능한 케이스

### 2. exception

예상할 수 없는 케이스

## 설계

### 1. 기능정의

- 어떤 기능이 있는지?

### 2. 로드맵정의하기

- 각각 시장에 배포가능한 작은 단계로 만들기.
- 문제정의
- 우선순위 정의(필수, 권장, 도전)

```ts
// 1. must have (필수)
// 2. good to have (권장)
// 3. nice to have (도전)
```

## 참고

- [randomImg](https://picsum.photos/)
- [Playground](https://www.typescriptlang.org/play)
- [UserStory](https://www.visual-paradigm.com/guide/agile-software-development/what-is-user-story/#:~:text=A%20user%20story%20is%20a,simplified%20description%20of%20a%20requirement)
- [tpyescript-Design-pattern](https://vallista.kr/2020/06/07/TypeScript-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-%EB%A9%94%EB%A9%98%ED%86%A0-%ED%8C%A8%ED%84%B4/)
