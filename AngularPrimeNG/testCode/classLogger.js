"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
function ClassDecorator(param1, param2) {
    var myFunc = function (target) {
        console.log("ClassDecorator(" + param1 + "," + param2 + ") called on " + target);
    };
    return myFunc;
}
function ClassDecoratorMultipleParameters() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var myFunc = function (target) {
        var list = args.join(',');
        console.log("ClassDecorator(" + list + ") called on " + target);
    };
    return myFunc;
}
//decorators with no parameters
var f1 = function () {
    var myFunc = function (target) {
        console.log("You just called this class from the code " + (target));
    };
    return (myFunc);
};
//This is the method decorator
function MethodDecorator(target, propertyKey, descriptor) {
    //  console.log(`Method Decorator called on ${target} ${propertyKey} ${descriptor}`);
    console.log("Method decorator called on:  ", target, propertyKey, descriptor.value);
}
function MethodDecoratorCalled(target, propertyKey, descriptor) {
    //  console.log(`Method Decorator called on ${target} ${propertyKey} ${descriptor}`);
    console.log("You just called this method decorator", target);
}
//Parameter decorator
function ParameterDecorator(target, propertyKey, parameterIndex) {
    console.log("Parameter Decorator called on ", target, propertyKey, parameterIndex.valueOf);
}
//Class decorator
// @f1()
// @ClassDecoratorMultipleParameters(10, 20, 30)
// @ClassDecorator(1, "20")
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    //@MethodDecoratorCalled
    Rectangle.prototype.getArea = function (height, width) {
        return (height * width);
    };
    ;
    __decorate([
        __param(0, ParameterDecorator),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], Rectangle.prototype, "getArea", null);
    return Rectangle;
}());
var myArea = new Rectangle();
console.log("Your area is: " + myArea.getArea(10, 5));
