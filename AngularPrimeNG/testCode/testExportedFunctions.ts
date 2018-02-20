/*
Intro: Importing the export file
Created by: Michael Ganesan
Date: 02/19/2018
*/

import { re, IPoint, IRect } from "./testExporting";


let myPoint:re = new re(10,10);

console.log(myPoint.getIPoint());
console.log('Get the Area:',myPoint.getArea());

interface StringArray{
    [index:number]:string;

}

let testArray:StringArray = ["Smith","David","Michael"];

console.log('Your array value for 0 is: ',testArray[0]);

let myNames:Array<string>= ["Doris","David","Elisha"];

console.log('Total names',myNames.length.toString());
console.log(myNames.join(':').split(':'));



