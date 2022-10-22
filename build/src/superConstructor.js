"use strict";
class Hewan5 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
class Katak5 extends Hewan5 {
    constructor(nama, kaki, beracun) {
        super(nama, kaki);
        this.beracun = beracun;
    }
}
const katak5 = new Katak5("Katak", 5, false);
console.log(katak5);
