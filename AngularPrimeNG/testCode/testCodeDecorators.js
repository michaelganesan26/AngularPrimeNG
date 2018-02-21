/*
Filename: Sample App using Decorators
Author:Michael Ganesan
Date: 02/20/2018
Objective:
Note:
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function f() {
    console.log("f(): evaluated");
    return function (target, propertKey, descriptor) {
        console.log('f(): called');
    };
}
function g() {
    console.log('g():evaluated');
    return function (target, propertKey, descriptor) {
        console.log('g(): called');
    };
}
var testClass = (function () {
    function testClass() {
    }
    testClass.prototype.method = function () {
        console.log('This is an internal decorator!');
    };
    return testClass;
}());
__decorate([
    f()
], testClass.prototype, "");
__decorate([
    g()
], testClass.prototype, "");
__decorate([
    f(), g()
], testClass.prototype, "");
var x1 = new testClass();
x1.method();
