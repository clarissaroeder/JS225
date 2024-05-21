class Cat {
  constructor(name = "Kitty") {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am a cat named ${this.name}!`);
  }

  rename(newName) {
    this.name = newName;
  }

  static genericGreeting() {
    console.log("Hello, I am a cat!");
  }
}

let kitty = new Cat();
kitty.greet();
kitty.rename("Sophie");
kitty.greet();
Cat.genericGreeting();