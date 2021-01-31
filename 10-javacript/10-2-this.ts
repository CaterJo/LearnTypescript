{
  /**
   * this는 동적할당이 된다.
   * 호출 주체
   */

  // window
  console.log(this);

  function say() {
    console.log(this);
  }

  // window
  // window.say(); 와 같음으로
  say();

  class Counter {
    count = 0;

    increase = function () {
      console.log(this);
    };
  }

  const counter = new Counter();

  // Counter
  counter.increase();

  const caller = counter.increase;

  // undefined
  // this의 정보가 유실된다.
  // let과 const로 생성한 변수는 window에 등록되지 않는다.
  caller();

  class Bob {
    run;
  }

  const bob = new Bob();

  // Bob이 나온다.
  bob.run = counter.increase;
}
