/*
Filename: testUnions
Author:Michael Ganesan
Date: 02/20/2018
Objective: Test Unions
Note: Test Unions
*/

var value: string | string[] = "some";
value = ["Smith", "David", "Jones"];


console.log(`The length of your string is: ${value.length}`);

//Sample Type Defintion

type PrimitiveArray = Array<string | number | boolean>;
type callBack = () => number;

type PrimitiveArrayOrCallback = PrimitiveArray | callBack;

function doSomething(n:PrimitiveArrayOrCallback){

      if(typeof(n) === 'function'){
         console.log('This is a call back function!');

      }

      if(typeof(n).toString() === 'string'){
        console.log('this is an array!');

     }
     
     if(typeof(n).toString() === 'number'){
        console.log('this is an number array!');

     } 


        console.log(typeof(n).toString(),n[0]);

      if(typeof(n) === "number") {

         console.log('This is a number');

      }

      

}

let myData:PrimitiveArray = ["Smith","Dors"];

myData = [1,2,3,4];
doSomething(myData);


