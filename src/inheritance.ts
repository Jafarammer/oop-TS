class Animals {
    berTaring: boolean = false;
    kaki: number = 0;
    makanRumput: boolean = false;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Karnivora extends Animals {
    karnivora: boolean = false;
    bertelur: boolean = false;
    beranak: boolean = false;
}
const singa = new Karnivora('Singa');
singa.berTaring = true
singa.beranak = true;
singa.bertelur = false;
singa.karnivora = true;
singa.makanRumput = false
console.log(singa)

class Herbivora extends Animals {
    karnivora: boolean = false;
    bertelur: boolean = false;
    beranak: boolean = false;
}

const kerbau = new Herbivora('Kerbau');
kerbau.berTaring = false;
kerbau.beranak = true;
kerbau.bertelur = false;
kerbau.kaki = 4
kerbau.karnivora = false;
kerbau.makanRumput = true
console.log(kerbau)