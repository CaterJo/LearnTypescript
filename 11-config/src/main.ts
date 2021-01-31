class Car {
  engine = 0;
  move() {
    const engine = this.engine + 1;

    console.log('brmm', engine);
  }
}
