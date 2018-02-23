
import *  as colors from '../node_modules/colors/lib/colors';


//logs the argments and returns the original constructor for a class
const log = <T>(originalConstructor: new (...args: any[]) => T) => {
    function newConstructor(...args) {
        let myArguments = args.join(",");
        console.log(`The values passed into your constructor: ${myArguments}`);
        new originalConstructor(args);
    }

    //return the original constructor
    newConstructor.prototype = originalConstructor.prototype;

    return (newConstructor)

}



//logs the argments and returns the original constructor for a class
const log2 = <T>(originalConstructor: new (...args: any[]) => T) => {
    function newConstructor(...args) {
        let myArguments = args.join(",");
        console.log(`The values passed into your constructor: ${myArguments}`);
        new originalConstructor(args);
    }

    //return the original constructor
    newConstructor.prototype = originalConstructor.prototype;

    return (newConstructor);

}



//decorators with no parameters
let f1 = (param1: string): any => {

    let myFunc = (target: Function) => {
        console.log(`You just called this class: ${(target.name)} Mode: ${param1}`);
    }

    return (myFunc);
}

//change and add a property
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {

    return class extends constructor {
        name: string = "Cheyenne";
        age:number = 4;
        debugMode:boolean = true;

    }
}


//@classDecorator
@log2
class Pet {

    name: string;
    age: number;
    

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    printPetData(): void {
        console.log(this.name);
        console.log(`Pet Data: ${this.name} ${this.age}`);
    }

}

 new Pet("Azor", 12);
// let myPet = new Pet("Pearl", 42);
// myPet.printPetData();

let myPet = new Pet("Pearl",42);

// console.log(myPet.debugMode);
 //console.log(myPet.name);

