import Animal from "./Animal";
import type Veterinario from "./Veterinario";
export default class Consulta {
    private readonly animal;
    private readonly veterinario;
    private readonly data;
    private _tratamento;
    constructor(animal: Animal, veterinario: Veterinario, data: Date);
    GETanimal(): Animal;
    GETveterinario(): Veterinario;
    GETdata(): Date;
    GETtratamento(): string | null;
    registrarTratamento(tratamento: string): void;
}
//# sourceMappingURL=Consulta.d.ts.map