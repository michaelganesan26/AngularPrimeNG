//This is a sample of a class decorator for a constructor
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
function classDecorator(constructor) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.currentDate = new Date();
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var Greeter = (function () {
    function Greeter(m) {
        this.property = "property";
        this.hello = m;
    }
    return Greeter;
}());
Greeter = __decorate([
    classDecorator
], Greeter);
var cCode = new Greeter("Welcome to my world");
console.log(cCode);
console.log('Your current date is: ', cCode.currentDate.toUTCString());
console.log(new Greeter("Hello Michael"));
//Property Descriptor for an object
var x = {};
Object.defineProperty(x, "foo", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false
});
Object.defineProperty(x, "bar", {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(x);
console.log("The value of bar is: ", x["bar"]);
//iterate through the property in x
for (var propertyName in x) {
    console.log(propertyName + " is " + x[propertyName]);
}
