import { stdout } from './view.js';

class Barbarian {

  constructor(name=`Conan`) {
    this.name = name;
  }

  attack(foe) {
    stdout(`${this.name} attacks ${foe.name}!`);
  }

  dance() {
    stdout(`${this.name} does his crazy jig!`);
  }
}

export {
  Barbarian,
}
