"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cachorro extends Animal_1.default {
    emitirSom() {
        return "Au au!";
    }
    descreverCuidadosDiarios() {
        return "Precisa de passeio diário e alimentação adequada.";
    }
}
exports.default = Cachorro;
//# sourceMappingURL=Cachorro.js.map