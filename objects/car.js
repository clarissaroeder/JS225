let car = {
  fuel: 7.8,
  running: false,
  start: function() {
    this.running = true;
  },
};

car.stop = function() {
  this.running = false;
}

car.drive = function(distance) {
  this.fuel -= distance / 52;
};