"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clinica {
    nome;
    animaisCadastrados = [];
    funcionariosCadastrados = [];
    constructor(nome) {
        this.nome = nome;
    }
    GETnome() {
        return this.nome;
    }
    GETanimais() {
        return [...this.animaisCadastrados];
    }
    GETfuncionarios() {
        return [...this.funcionariosCadastrados];
    }
    cadastrarAnimal(animal) {
        if (!this.animaisCadastrados.includes(animal)) {
            this.animaisCadastrados.push(animal);
        }
    }
    removerAnimal(animal) {
        return Clinica.removerReferencia(this.animaisCadastrados, animal);
    }
    adicionarFuncionario(funcionario) {
        if (!this.funcionariosCadastrados.includes(funcionario)) {
            this.funcionariosCadastrados.push(funcionario);
        }
    }
    removerFuncionario(funcionario) {
        return Clinica.removerReferencia(this.funcionariosCadastrados, funcionario);
    }
    static removerReferencia(itens, item) {
        const indice = itens.indexOf(item);
        if (indice === -1) {
            return false;
        }
        itens.splice(indice, 1);
        return true;
    }
}
exports.default = Clinica;
//# sourceMappingURL=Clinica.js.map