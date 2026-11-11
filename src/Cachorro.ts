import Animal from "./abstratos/Animal";
 
export default class Cachorro extends Animal {
  emitirSom(): string {
    return "Au au!";
  }
 
  descreverCuidadosDiarios(): string {
    return "Precisa de passeio diário e alimentação adequada.";
  }
}
 