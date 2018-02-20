

/*
Filename: TestCode
Author:Michael Ganesan
Date: 02/19/2018
Objective: Test Code
Note:All of this code is just test code for nodejs. 
*/

enum Colors{
  Red,
  Yellow,
  Blue,
  Orange,
  None
};


interface Animal {
    name: string;
    noise(noiseType: string): void;
    getNoiseType(): void;
    coatColor: Colors;
    getCoatColor():string;

}

class Dog implements Animal {

    name: string;
    bark: string;
    coatColor:Colors; 



    constructor(coatColor:Colors) {
       this.coatColor=coatColor;

     };

    noise(noiseType: string) {

        this.bark = noiseType;
    }

    getNoiseType(): void {

        console.log(`Your noise type is: ${this.bark}`);
    }

    getCoatColor():string{

         return(Colors[this.coatColor]);

    }

}

class SheepDog extends Dog {

    constructor(coatColor:Colors) {
        super(coatColor);
    }


}

let tempSheepDog = new SheepDog(Colors.Red);
tempSheepDog.name = "Coyote";
tempSheepDog.noise("barking");
tempSheepDog.getNoiseType();
console.log(`Your dog's coat color is ${tempSheepDog.getCoatColor()}`);


//Comment: This is a definiton for the function 
var printName: (name:string)=>void;

printName = (name:string)=>{
   console.log(`Your name is ${name}`);
};

printName("Michael Ganesan");

//Optional parameter
var printMessage: (message:string,message2?:string)=>void = (message,message2)=>{

  if(message2){

      console.log(`Your message2 is: ${message2}`);

  }

  if(message){

     console.log(`Your message is: ${message}`);

  }


}

printMessage("Michael");

printMessage("Wow this is really cool!","Michael");


//Comment: This is how you use generics

class GenericValue<T>{
  
    increment:(x:T)=>T;
    decrement:(x:T)=>T;

    constructor(private value:T){

    }

}


let genTest = new GenericValue(21);

 genTest.increment = (x):number=>{

        return(++x);
 };

 genTest.decrement = (x):number=>{
      return(--x);

 }

 console.log(`Value Incremented: ${genTest.increment(21)}`);
 console.log(`Value Decrement: ${genTest.decrement(21)}`);


 class TestCode{
   constructor(private mydata:string){}
   printData():void{
       
     console.log(`this is your data ${this.mydata}`);

   }
 }

 let myTest = new TestCode("Michael");
 myTest.printData();









 
 