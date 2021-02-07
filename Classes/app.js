class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a = 1) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const red = new Color(255, 67, 89, "tomato");

class Pet {
  constructor(name, age) {
    console.log("in pet constructor");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}
class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("in cat constructor");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "meowww";
  }
}

class Dog extends Pet {
  woof() {
    return "woooof";
  }
  eat() {
    return `${this.name} is scarfing down his food`;
  }
}
