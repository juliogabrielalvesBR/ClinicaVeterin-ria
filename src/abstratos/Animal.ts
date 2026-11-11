export default abstract class Animal {
  private nome: string;
  private idade: number;
  private tutor: string;

  constructor(nome: string, idade: number, tutor: string) {
    this.nome = nome;
    this.idade = idade;
    this.tutor = tutor;
  }

  public GETnome(): string {
    return this.nome;
  }

  public SETnome(nome: string): void {
    this.nome = nome;
  }

  public GETidade(): number {
    return this.idade;
  }

  public SETidade(idade: number): void {
    this.idade = idade;
  }

  public GETtutor(): string {
    return this.tutor;
  }

  public SETtutor(tutor: string): void {
    this.tutor = tutor;
  }

  abstract emitirSom(): string;
  abstract descreverCuidadosDiarios(): string;

  apresentar(): string {
    return `${this.GETnome()} (${this.GETidade()} ano(s)), tutor: ${this.GETtutor()}`;
  }
}
