import Animal from "./abstratos/Animal";
import Funcionário from "./abstratos/Funcionários";

export default class Clinica {
  private readonly nome: string;
  private readonly animaisCadastrados: Animal[] = [];
  private readonly funcionariosCadastrados: Funcionário[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  public GETnome(): string {
    return this.nome;
  }

  public GETanimais(): readonly Animal[] {
    return [...this.animaisCadastrados];
  }

  public GETfuncionarios(): readonly Funcionário[] {
    return [...this.funcionariosCadastrados];
  }

  cadastrarAnimal(animal: Animal): void {
    if (!this.animaisCadastrados.includes(animal)) {
      this.animaisCadastrados.push(animal);
    }
  }

  removerAnimal(animal: Animal): boolean {
    return Clinica.removerReferencia(this.animaisCadastrados, animal);
  }

  adicionarFuncionario(funcionario: Funcionário): void {
    if (!this.funcionariosCadastrados.includes(funcionario)) {
      this.funcionariosCadastrados.push(funcionario);
    }
  }

  removerFuncionario(funcionario: Funcionário): boolean {
    return Clinica.removerReferencia(this.funcionariosCadastrados, funcionario);
  }

  private static removerReferencia<T>(itens: T[], item: T): boolean {
    const indice = itens.indexOf(item);
    if (indice === -1) {
      return false;
    }

    itens.splice(indice, 1);
    return true;
  }
}
