import { Move } from "./move";

export abstract class Animal implements Move {
    constructor(public name: string, public movemethod: string) { }

    run() {
        console.log("I move by " + this.movemethod)
    }


    presentation(): void {
        console.log("Hello, my name is: " + this.name)
    }
}