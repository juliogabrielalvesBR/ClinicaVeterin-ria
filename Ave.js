"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
const Animal_1 = __importDefault(require("./Animal"));
class Ave extends Animal_1.default {
    emitirSom() {
        return "Canta!";
    }
    descreverCuidadosDiarios() {
        return "Precisa de uma gaiola e alimentação adequada.";
    }
}
exports.Ave = Ave;
//# sourceMappingURL=Ave.js.map