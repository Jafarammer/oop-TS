class Burung {
    private kaki: number = 2;

    getKaki(): number {
        return this.kaki
    }

    // method yang tidak memiliki return typenya harus void
    terbang(): void {
        console.log('terbang')
    }

    // jika method itu asyncronus typenya harus promis, promis string atau yang lain tergantung returnnya
    async makan(): Promise<string> {
        return 'Makan'
    }
}