export default abstract class Funcionário {
    private nome;
    private matricula;
    private _salario;
    constructor(nome: string, matricula: string, salario: number);
    GETnome(): string;
    SETnome(nome: string): void;
    GETmatricula(): string;
    SETmatricula(matricula: string): void;
    GETsalario(): number;
    SETsalario(salario: number): void;
    abstract calcularBonus(valorPorAtividade: number): number;
}
//# sourceMappingURL=Funcion%C3%A1rios.d.ts.map