import Funcionário from "./Funcionários";
import Animal from "./Animal";
import Agendamento from "./Agendamento";
export default class Recepcionista extends Funcionário {
    private agendamentosConfirmados;
    GETquantidadeAgendamentosConfirmados(): number;
    agendarAtendimento(animal: Animal, data: Date): Agendamento;
    confirmarAgendamento(agendamento: Agendamento): void;
    calcularBonus(valorPorAgendamento: number): number;
}
//# sourceMappingURL=Recepcionista.d.ts.map