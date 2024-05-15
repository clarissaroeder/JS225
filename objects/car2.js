function makeCar(accelerationRate, breakRate) {
  return {
    speed: 0,
    accelerationRate,
    breakRate,
    accelerate() {
      this.speed += this.accelerationRate;
    },
    break() {
      this.speed -= this.breakRate;

      if (this.speed < 0) {
        this.speed = 0;
      } 
    },
  }
}

let sedan = makeCar(8);
let coupe = makeCar(12);
let hatchback = makeCar(9);