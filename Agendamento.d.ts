import Animal from "./Animal";
export default class Agendamento {
    private animal;
    private data;
    private _confirmado;
    constructor(animal: Animal, data: Date);
    GETanimal(): Animal;
    GETdata(): Date;
    GETconfirmado(): boolean;
    confirmar(): boolean;
}
//# sourceMappingURL=Agendamento.d.ts.map