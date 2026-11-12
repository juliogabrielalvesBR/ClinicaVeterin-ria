"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nome;
    idade;
    tutor;
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }
    GETnome() {
        return this.nome;
    }
    SETnome(nome) {
        this.nome = nome;
    }
    GETidade() {
        return this.idade;
    }
    SETidade(idade) {
        this.idade = idade;
    }
    GETtutor() {
        return this.tutor;
    }
    SETtutor(tutor) {
        this.tutor = tutor;
    }
    apresentar() {
        return `${this.GETnome()} (${this.GETidade()} ano(s)), tutor: ${this.GETtutor()}`;
    }
}
exports.default = Animal;
//# sourceMappingURL=Animal.js.map