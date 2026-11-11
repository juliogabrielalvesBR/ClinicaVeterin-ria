import Animal from "./abstratos/Animal";
 
export class Ave extends Animal {
  emitirSom(): string {
    return "Canta!";
  }
 
  descreverCuidadosDiarios(): string {
    return "Precisa de uma gaiola e alimentação adequada.";
  }
}
 