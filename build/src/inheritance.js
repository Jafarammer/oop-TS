"use strict";
class Animals {
    constructor(name) {
        this.berTaring = false;
        this.kaki = 0;
        this.makanRumput = false;
        this.name = name;
    }
}
class Karnivora extends Animals {
    constructor() {
        super(...arguments);
        this.karnivora = false;
        this.bertelur = false;
        this.beranak = false;
    }
}
const singa = new Karnivora('Singa');
singa.berTaring = true;
singa.beranak = true;
singa.bertelur = false;
singa.karnivora = true;
singa.makanRumput = false;
console.log(singa);
class Herbivora extends Animals {
    constructor() {
        super(...arguments);
        this.karnivora = false;
        this.bertelur = false;
        this.beranak = false;
    }
}
const kerbau = new Herbivora('Kerbau');
kerbau.berTaring = false;
kerbau.beranak = true;
kerbau.bertelur = false;
kerbau.kaki = 4;
kerbau.karnivora = false;
kerbau.makanRumput = true;
console.log(kerbau);
