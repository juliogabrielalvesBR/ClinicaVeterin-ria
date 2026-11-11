export default abstract class Funcionário {
  private nome: string;
  private matricula: string;
  private _salario: number;

  constructor(nome: string, matricula: string, salario: number) {
    this.nome = nome;
    this.matricula = matricula;
    this._salario = 0;
    this.SETsalario(salario);
  }

  public GETnome(): string {
    return this.nome;
  }

  public SETnome(nome: string): void {
    this.nome = nome;
  }

  public GETmatricula(): string {
    return this.matricula;
  }

  public SETmatricula(matricula: string): void {
    this.matricula = matricula;
  }

  public GETsalario(): number {
    return this._salario;
  }

  public SETsalario(salario: number): void {
    if (Number.isFinite(salario) && salario >= 0) {
      this._salario = salario;
    }
  }

  abstract calcularBonus(valorPorAtividade: number): number;
}