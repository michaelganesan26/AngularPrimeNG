"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//logs the argments and returns the original constructor for a class
var log = function (originalConstructor) {
    function newConstructor() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var myArguments = args.join(",");
        console.log("The values passed into your constructor: " + myArguments);
        new originalConstructor(args);
    }
    //return the original constructor
    newConstructor.prototype = originalConstructor.prototype;
    return (newConstructor);
};
//logs the argments and returns the original constructor for a class
var log2 = function (originalConstructor) {
    function newConstructor() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var myArguments = args.join(",");
        console.log("The values passed into your constructor: " + myArguments);
        new originalConstructor(args);
    }
    //return the original constructor
    newConstructor.prototype = originalConstructor.prototype;
    return (newConstructor);
};
//decorators with no parameters
var f1 = function (param1) {
    var myFunc = function (target) {
        console.log("You just called this class: " + (target.name) + " Mode: " + param1);
    };
    return (myFunc);
};
//change and add a property
function classDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Cheyenne";
            _this.age = 4;
            _this.debugMode = true;
            return _this;
        }
        return class_1;
    }(constructor));
}
//@classDecorator
var Pet = /** @class */ (function () {
    function Pet(name, age) {
        this.name = name;
        this.age = age;
    }
    Pet.prototype.printPetData = function () {
        console.log(this.name);
        console.log("Pet Data: " + this.name + " " + this.age);
    };
    Pet = __decorate([
        log2,
        __metadata("design:paramtypes", [String, Number])
    ], Pet);
    return Pet;
}());
new Pet("Azor", 12);
// let myPet = new Pet("Pearl", 42);
// myPet.printPetData();
var myPet = new Pet("Pearl", 42);
// console.log(myPet.debugMode);
//console.log(myPet.name);
