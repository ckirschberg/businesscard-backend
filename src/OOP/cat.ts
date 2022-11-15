import { Animal } from "./animal";
import { Move } from "./move";

export class Cat extends Animal {
    constructor(name: string, public color: string, movemethod: string) {
        super(name, movemethod);
    }

    speak(): void {
        console.log("Miauuuu");
    }
}