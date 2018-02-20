"use strict";
/*
Intro: Importing the export file
Created by: Michael Ganesan
Date: 02/19/2018
*/
exports.__esModule = true;
var testExporting_1 = require("./testExporting");
var myPoint = new testExporting_1.re(10, 10);
console.log(myPoint.getIPoint());
console.log('Get the Area:', myPoint.getArea());
var testArray = ["Smith", "David", "Michael"];
console.log('Your array value for 0 is: ', testArray[0]);
var myNames = ["Doris", "David", "Elisha"];
console.log('Total names', myNames.length.toString());
console.log(myNames.join(':').split(':'));
