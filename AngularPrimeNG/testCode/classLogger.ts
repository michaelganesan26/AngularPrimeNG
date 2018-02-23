//Class decorator
import * as colors  from '../node_modules/colors/lib/colors';


function ClassDecorator(param1: number, param2: string): any {

    let myFunc = (target: Function) => {
        console.log(`ClassDecorator(${param1},${param2}) called on ${target}`);
    }
    return myFunc;
}

function ClassDecoratorMultipleParameters(...args: any[]): any {

    let myFunc = (target: Function) => {
        let list = args.join(',');
        console.log(`ClassDecorator(${list}) called on ${target}`);
    }
    return myFunc;
}

//decorators with no parameters
let f1 = (): any => {

    let myFunc = (target: Function) => {
        console.log(`You just called this class from the code ${(target)}`);
    }

    return (myFunc);
}

//This is the method decorator
function MethodDecorator(target:Object,propertyKey:string|symbol,descriptor:TypedPropertyDescriptor<any>){
    //  console.log(`Method Decorator called on ${target} ${propertyKey} ${descriptor}`);
    console.log("Method decorator called on:  ",target,propertyKey,descriptor.value);
  
}

function MethodDecoratorCalled(target:Object,propertyKey:string|symbol,descriptor:TypedPropertyDescriptor<any>){
    //  console.log(`Method Decorator called on ${target} ${propertyKey} ${descriptor}`);
    console.log("You just called this method decorator",target);
  
}


//Parameter decorator
function ParameterDecorator(target:Object, propertyKey:string|symbol,parameterIndex:number){

         console.log("Parameter Decorator called on ",target,propertyKey,parameterIndex);

}


//Class decorator
// @f1()
// @ClassDecoratorMultipleParameters(10, 20, 30)
// @ClassDecorator(1, "20")
class Rectangle {

    constructor() { }

    //@MethodDecoratorCalled
    getArea(@ParameterDecorator height: number, width: number) {

        return (height * width);

    };

}


let myArea = new Rectangle();

console.log(`Your area is: ${myArea.getArea(10, 5)}`);






