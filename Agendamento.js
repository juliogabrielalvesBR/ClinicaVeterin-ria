"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agendamento {
    animal;
    data;
    _confirmado = false;
    constructor(animal, data) {
        this.animal = animal;
        this.data = data;
    }
    GETanimal() {
        return this.animal;
    }
    GETdata() {
        return this.data;
    }
    GETconfirmado() {
        return this._confirmado;
    }
    confirmar() {
        if (this._confirmado) {
            return false;
        }
        this._confirmado = true;
        return true;
    }
}
exports.default = Agendamento;
//# sourceMappingURL=Agendamento.js.map