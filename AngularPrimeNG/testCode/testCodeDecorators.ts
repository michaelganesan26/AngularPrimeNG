/*
Filename: Sample App using Decorators
Author:Michael Ganesan
Date: 02/20/2018
Objective: 
Note:
*/

function f() {
    console.log("f(): evaluated");
    return function (target, propertKey: string, descriptor: PropertyDescriptor) {

        console.log('f(): called');
    }
}


function g() {
    console.log('g():evaluated');
    return function (target, propertKey: string, descriptor: PropertyDescriptor) {
        console.log('g(): called');
    }
}


class testClass{

  @f ();
  @g (); 
  @f() @g();

  method() {
      console.log('This is an internal decorator!');

  }
}


let x1 = new testClass();

x1.method();


