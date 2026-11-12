"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const Animal_1 = __importDefault(require("./Animal"));
class Gato extends Animal_1.default {
    emitirSom() {
        return "Miau!";
    }
    descreverCuidadosDiarios() {
        return "Precisa de alimentação adequada e de um arranhador.";
    }
}
exports.Gato = Gato;
//# sourceMappingURL=Gato.js.map