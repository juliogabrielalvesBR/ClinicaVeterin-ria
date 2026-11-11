import Animal from "./abstratos/Animal";
 
export class Gato extends Animal {
  emitirSom(): string {
    return "Miau!";
  }
 
  descreverCuidadosDiarios(): string {
    return "Precisa de alimentação adequada e de um arranhador.";
  }
}
 