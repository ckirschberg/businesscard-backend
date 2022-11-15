import { Animal } from "./animal";

export class Dog extends Animal {
    constructor(name: string, public breed: string, movemethod: string) {
        super(name, movemethod);
    }

    speak(): void {
        console.log("Wuff wuff");
    }

}