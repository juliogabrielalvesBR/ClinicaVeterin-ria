import Animal from "./abstratos/Animal";

export default class Agendamento {
  private animal: Animal;
  private data: Date;
  private _confirmado = false;

  constructor(animal: Animal, data: Date) {
    this.animal = animal;
    this.data = data;
  }

  public GETanimal(): Animal {
    return this.animal;
  }

  public GETdata(): Date {
    return this.data;
  }

  public GETconfirmado(): boolean {
    return this._confirmado;
  }

  confirmar(): boolean {
    if (this._confirmado) {
      return false;
    }

    this._confirmado = true;
    return true;
  }
}
