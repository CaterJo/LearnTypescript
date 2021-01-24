{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full time');
    }

    workFullTime() {
      console.log('workFullTime');
    }
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('part time');
    }

    workPartTime() {
      console.log('workPartTime');
    }
  }

  /**
   * @description 주입받는 타입이 Employee를 확장한 타입임을 보장해야합니다.
   * @param employee
   */
  function pay<E extends Employee>(employee: E): E {
    employee.pay();
    return employee;
  }

  const peter = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  const peterAfterPay = pay(peter);
  peterAfterPay.workFullTime();
  const bobAfterPay = pay(bob);
  bobAfterPay.workPartTime();

  const obj = {
    name: 'cater',
    age: 20,
  };

  /**
   * @description object 타입은 []를 통해 해당 타입의 키에 접근할 수 있다.
   * @param obj
   * @param key
   */
  const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  const hisName: string = getValue(obj, 'name');

  const hisAge: number = getValue(obj, 'age');
}
