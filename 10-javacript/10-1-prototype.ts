/**
 * Prototype-based Programming
 */

{
  const x = {};
  const y = {};

  function CoffeeMachie(beans) {
    this.beans = beans;

    // Instace Member
    this.getSerialnumber = () => {
      console.log('SN:..');
    };
  }

  // Prototype member
  CoffeeMachie.prototype.makeCoffee = () => {
    console.log('making... ');
  };

  const machine1 = new CoffeeMachie(10);
  const machine2 = new CoffeeMachie(20);

  function LateeMachine(milk) {
    this.milk = milk;
  }

  LateeMachine.prototype = Object.create(CoffeeMachie.prototype);

  const lateeMachie = new LateeMachine(123);

  lateeMachie.makeCoffee();
}
