"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Burung {
    constructor() {
        this.kaki = 2;
    }
    getKaki() {
        return this.kaki;
    }
    // method yang tidak memiliki return typenya harus void
    terbang() {
        console.log('terbang');
    }
    // jika method itu asyncronus typenya harus promis, promis string atau yang lain tergantung returnnya
    makan() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'Makan';
        });
    }
}
