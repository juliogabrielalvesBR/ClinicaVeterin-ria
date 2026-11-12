import Animal from "./Animal";
import Funcionário from "./Funcionários";
export default class Clinica {
    private readonly nome;
    private readonly animaisCadastrados;
    private readonly funcionariosCadastrados;
    constructor(nome: string);
    GETnome(): string;
    GETanimais(): readonly Animal[];
    GETfuncionarios(): readonly Funcionário[];
    cadastrarAnimal(animal: Animal): void;
    removerAnimal(animal: Animal): boolean;
    adicionarFuncionario(funcionario: Funcionário): void;
    removerFuncionario(funcionario: Funcionário): boolean;
    private static removerReferencia;
}
//# sourceMappingURL=Clinica.d.ts.map