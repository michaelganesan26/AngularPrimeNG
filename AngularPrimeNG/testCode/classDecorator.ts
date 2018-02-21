//This is a sample of a class decorator for a constructor

function classDecorator<T extends {new (...args:any[]):{}}>(constructor:T){
   
    return class extends constructor {
           newProperty:string = "new property";
           currentDate:Date = new Date();
           hello = "override";
    }
}

@classDecorator
class Greeter{
   property = "property";
   hello:string;
   
   constructor(m:string){

       this.hello=m;
   }
}

let cCode = new Greeter("Welcome to my world");

console.log(cCode);
console.log('Your current date is: ',(<Date>cCode.currentDate).toUTCString());


console.log(new Greeter("Hello Michael"));

//Property Descriptor for an object

let x = {};
Object.defineProperty(x,"foo",{
  value:1,
  writable:false,
  enumerable: true,
  configurable: false
});

Object.defineProperty(x,"bar",{
    value:2,
    writable:true,
    enumerable: true,
    configurable: true
  });

  console.log(x);

console.log("The value of bar is: " ,x["bar"]);

//iterate through the property in x
for(var  propertyName in x){
     console.log(`${propertyName} is ${x[propertyName]}`);
}



