import Animal from "./Animal";
import Funcionário from "./Funcionários";
import Consulta from "./Consulta";
export default class Veterinario extends Funcionário {
    private consultasRealizadas;
    GETquantidadeConsultas(): number;
    realizarConsulta(animal: Animal, data: Date): Consulta;
    prescreverTratamento(consulta: Consulta, tratamento: string): void;
    calcularBonus(valorPorConsulta: number): number;
}
//# sourceMappingURL=Veterinario.d.ts.map