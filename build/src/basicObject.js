"use strict";
class Hewan {
}
const cat = new Hewan();
console.log(cat);
class HewanTwo {
    constructor() {
        console.log('constructor akan selalu dipanggil terlebih dahulu');
    }
}
const hewanTwo = new HewanTwo();
// properti method
class HewanThree {
    constructor() {
        // properti in below
        this.nama = '';
        this.kaki = 0;
        this.mamalia = false;
    }
    // method in below
    bernafas() {
        console.log(`${this.nama} sedang bernafas`);
    }
}
const hewanThree = new HewanThree();
console.log(hewanThree);
hewanThree.nama = 'Kucing';
hewanThree.kaki = 4;
hewanThree.mamalia = true;
console.log(hewanThree);
// constructor
class Hewan4V1 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
const ayam = new Hewan4V1('Ayam', 2);
console.log(ayam);
console.log(ayam.nama);
console.log(ayam.kaki);
class Hewan4V2 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
const kambing = new Hewan4V2('Kambing', 4);
console.log(kambing);
console.log(kambing.nama);
console.log(kambing.kaki);
