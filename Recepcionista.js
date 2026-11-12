"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcion__rios_1 = __importDefault(require("./Funcion\u00E1rios"));
const Agendamento_1 = __importDefault(require("./Agendamento"));
class Recepcionista extends Funcion__rios_1.default {
    agendamentosConfirmados = 0;
    GETquantidadeAgendamentosConfirmados() {
        return this.agendamentosConfirmados;
    }
    agendarAtendimento(animal, data) {
        return new Agendamento_1.default(animal, data);
    }
    confirmarAgendamento(agendamento) {
        if (agendamento.confirmar()) {
            this.agendamentosConfirmados += 1;
        }
    }
    calcularBonus(valorPorAgendamento) {
        return this.agendamentosConfirmados * valorPorAgendamento;
    }
}
exports.default = Recepcionista;
//# sourceMappingURL=Recepcionista.js.map