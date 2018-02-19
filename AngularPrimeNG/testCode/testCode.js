/*
Filename: TestCode
Author:Michael Ganesan
Date: 02/19/2018
Objective: Test Code
Note:All of this code is just test code for nodejs.
*/
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
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Yellow"] = 1] = "Yellow";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
    Colors[Colors["None"] = 4] = "None";
})(Colors || (Colors = {}));
;
var Dog = /** @class */ (function () {
    function Dog(coatColor) {
        this.coatColor = coatColor;
    }
    ;
    Dog.prototype.noise = function (noiseType) {
        this.bark = noiseType;
    };
    Dog.prototype.getNoiseType = function () {
        console.log("Your noise type is: " + this.bark);
    };
    Dog.prototype.getCoatColor = function () {
        return (Colors[this.coatColor]);
    };
    return Dog;
}());
var SheepDog = /** @class */ (function (_super) {
    __extends(SheepDog, _super);
    function SheepDog(coatColor) {
        return _super.call(this, coatColor) || this;
    }
    return SheepDog;
}(Dog));
var tempSheepDog = new SheepDog(Colors.Red);
tempSheepDog.name = "Coyote";
tempSheepDog.noise("barking");
tempSheepDog.getNoiseType();
console.log("Your dog's coat color is " + tempSheepDog.getCoatColor());
//Comment: This is a definiton for the function 
var printName;
printName = function (name) {
    console.log("Your name is " + name);
};
printName("Michael Ganesan");
//Optional parameter
var printMessage = function (message, message2) {
    if (message2) {
        console.log("Your message2 is: " + message2);
    }
    if (message) {
        console.log("Your message is: " + message);
    }
};
printMessage("Michael");
printMessage("Wow this is really cool!", "Michael");
