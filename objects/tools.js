function makeProduct(id, name, stock, price) {
  return {
    id,
    name, 
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log("Invalid price.");
      } else {
        this.price = newPrice;
      }
    },

    describe() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    }
  }
}

let scissors = makeProduct(0, 'Scissors', 8, 10);
let drill = makeProduct(1, 'Cordless Drill', 15, 45);
let saw = makeProduct(2, 'Circular Saw', 12, 95);