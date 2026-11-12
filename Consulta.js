"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Consulta {
    animal;
    veterinario;
    data;
    _tratamento = null;
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }
    GETanimal() {
        return this.animal;
    }
    GETveterinario() {
        return this.veterinario;
    }
    GETdata() {
        return this.data;
    }
    GETtratamento() {
        return this._tratamento;
    }
    registrarTratamento(tratamento) {
        this._tratamento = tratamento;
    }
}
exports.default = Consulta;
//# sourceMappingURL=Consulta.js.map