"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcion__rios_1 = __importDefault(require("./Funcion\u00E1rios"));
const Consulta_1 = __importDefault(require("./Consulta"));
class Veterinario extends Funcion__rios_1.default {
    consultasRealizadas = 0;
    GETquantidadeConsultas() {
        return this.consultasRealizadas;
    }
    realizarConsulta(animal, data) {
        const consulta = new Consulta_1.default(animal, this, data);
        this.consultasRealizadas += 1;
        return consulta;
    }
    prescreverTratamento(consulta, tratamento) {
        consulta.registrarTratamento(tratamento);
    }
    calcularBonus(valorPorConsulta) {
        return this.consultasRealizadas * valorPorConsulta;
    }
}
exports.default = Veterinario;
//# sourceMappingURL=Veterinario.js.map