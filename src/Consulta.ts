import Animal from "./abstratos/Animal";
import type Veterinario from "./Veterinario";

export default class Consulta {
  private readonly animal: Animal;
  private readonly veterinario: Veterinario;
  private readonly data: Date;
  private _tratamento: string | null = null;

  constructor(animal: Animal, veterinario: Veterinario, data: Date) {
    this.animal = animal;
    this.veterinario = veterinario;
    this.data = data;
  }

  public GETanimal(): Animal {
    return this.animal;
  }

  public GETveterinario(): Veterinario {
    return this.veterinario;
  }

  public GETdata(): Date {
    return this.data;
  }

  public GETtratamento(): string | null {
    return this._tratamento;
  }

  public registrarTratamento(tratamento: string): void {
    this._tratamento = tratamento;
  }
}
