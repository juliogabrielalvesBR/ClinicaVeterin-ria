"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionário {
    nome;
    matricula;
    _salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this._salario = 0;
        this.SETsalario(salario);
    }
    GETnome() {
        return this.nome;
    }
    SETnome(nome) {
        this.nome = nome;
    }
    GETmatricula() {
        return this.matricula;
    }
    SETmatricula(matricula) {
        this.matricula = matricula;
    }
    GETsalario() {
        return this._salario;
    }
    SETsalario(salario) {
        if (Number.isFinite(salario) && salario >= 0) {
            this._salario = salario;
        }
    }
}
exports.default = Funcionário;
//# sourceMappingURL=Funcion%C3%A1rios.js.map