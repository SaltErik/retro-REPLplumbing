import { stdout } from "./view.js";

class Barbarian {
  name: string;
  constructor(name = `Conan`) {
    this.name = name;
  }

  attack(foe: any) {
    stdout(`${this.name} attacks ${foe.name}!`);
  }

  dance() {
    stdout(`${this.name} does his crazy jig!`);
  }
}

export { Barbarian };
