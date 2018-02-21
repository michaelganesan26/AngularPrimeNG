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


class C{

  @f ();
  @g (); 

  method() {}
}