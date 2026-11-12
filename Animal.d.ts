export default abstract class Animal {
    private nome;
    private idade;
    private tutor;
    constructor(nome: string, idade: number, tutor: string);
    GETnome(): string;
    SETnome(nome: string): void;
    GETidade(): number;
    SETidade(idade: number): void;
    GETtutor(): string;
    SETtutor(tutor: string): void;
    abstract emitirSom(): string;
    abstract descreverCuidadosDiarios(): string;
    apresentar(): string;
}
//# sourceMappingURL=Animal.d.ts.map