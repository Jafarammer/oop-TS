class Ayam {
    static kaki: number = 2;

    static getJalan() {
        console.log(`Ayam berjalan dengan ${this.kaki} kaki`)
    }

    getKaki() {
        console.log(Ayam.kaki)
    }
}

// jika static bisa seperti ini
console.log(Ayam.getJalan())
// bisa seperti biasa
const ayam2 = new Ayam()
console.log(ayam2)
ayam2.getKaki()
console.log(ayam2)