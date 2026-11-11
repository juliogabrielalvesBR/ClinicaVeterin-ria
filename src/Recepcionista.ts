import Funcionário from "./abstratos/Funcionários";
import Animal from "./abstratos/Animal";
import Agendamento from "./Agendamento";

export default class Recepcionista extends Funcionário {
  private agendamentosConfirmados = 0;

  public GETquantidadeAgendamentosConfirmados(): number {
    return this.agendamentosConfirmados;
  }

  agendarAtendimento(animal: Animal, data: Date): Agendamento {
    return new Agendamento(animal, data);
  }

  confirmarAgendamento(agendamento: Agendamento): void {
    if (agendamento.confirmar()) {
      this.agendamentosConfirmados += 1;
    }
  }

  calcularBonus(valorPorAgendamento: number): number {
    return this.agendamentosConfirmados * valorPorAgendamento;
  }
}
