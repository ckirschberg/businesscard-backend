import { Animal } from "./animal";
import { Cat } from "./cat";
import { Dog } from "./dog";
import { Move } from "./move";

const somethingThatMove: Move = new Cat("Chalie", "Brownish", "Sprinting");
const dog1: Dog = new Dog("Fido", "German Shepard", "Jogging");

//const animal = new Animal("Jens", "Flying");


somethingThatMove.run();

dog1.presentation();
dog1.speak();
dog1.run();