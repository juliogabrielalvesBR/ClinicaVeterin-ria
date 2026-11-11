import Animal from "./abstratos/Animal";
import Funcionário from "./abstratos/Funcionários";
import Consulta from "./Consulta";

export default class Veterinario extends Funcionário {
  private consultasRealizadas = 0;

  public GETquantidadeConsultas(): number {
    return this.consultasRealizadas;
  }

  realizarConsulta(animal: Animal, data: Date): Consulta {
    const consulta = new Consulta(animal, this, data);
    this.consultasRealizadas += 1;
    return consulta;
  }

  prescreverTratamento(consulta: Consulta, tratamento: string): void {
    consulta.registrarTratamento(tratamento);
  }

  calcularBonus(valorPorConsulta: number): number {
    return this.consultasRealizadas * valorPorConsulta;
  }
}
