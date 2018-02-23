var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//This is a sample application using the method decorator
var leDecorator = function (target, propertyKey, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log("Calling " + propertyKey + " with ", arguments, target);
        var value = oldValue.apply(null, [arguments[1], arguments[0]]);
        console.log("Function executed!");
        return (value + "; This is awesome");
    };
    return descriptor;
};
var leDecorator2 = function (target, propertyKey, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log("Calling " + propertyKey + " with ", arguments, target);
        arguments[0] = 'Michael this is way too cool';
        arguments[1] = 'Wow, this is not bad!';
        var value = oldValue.apply(null, [arguments[0], arguments[1]]);
        console.log("Function executed!");
        return (value + "; This is awesome");
    };
    return descriptor;
};
var trackValues = function (target, propertyKey, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log("Calling " + propertyKey + " with ", arguments, target);
        var result = oldValue.apply(this, arguments);
        return (result);
    };
    return descriptor;
};
var trackValues2 = function (target, propertyKey, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        //console.log(`Calling ${propertyKey} with `,arguments,target);
        var args = Array.prototype.slice.call(arguments);
        var a = args.map(function (a) { return JSON.stringify(a); }).join();
        var result = oldValue.apply(this, arguments);
        var r = JSON.stringify(result);
        console.log("Call: " + propertyKey + " (" + a + ") => " + r);
        return (result);
    };
    return descriptor;
};
//Pass in optional parameters into the method decorators
var trackValuesWithArguments = function (mode) {
    function actualDecorator(target, propertyKey, descriptor) {
        var oldValue = descriptor.value;
        descriptor.value = function () {
            //console.log(`Calling ${propertyKey} with `,arguments,target);
            var args = Array.prototype.slice.call(arguments);
            var a = args.map(function (a) { return JSON.stringify(a); }).join();
            var result = oldValue.apply(this, arguments);
            var r = JSON.stringify(result);
            if (mode === "debug") {
                console.log("Call: " + propertyKey + " (" + a + ") => " + r);
            }
            return (result);
        };
        return descriptor;
    }
    return (actualDecorator);
};
var JSMeetUp = /** @class */ (function () {
    function JSMeetUp() {
        this.speaker = "Ruban";
    }
    //@trackValues2
    JSMeetUp.prototype.welcome = function (arg1, arg2) {
        console.log("Arguments received: " + arg1 + ", " + arg2);
        return (arg1 + " " + arg2);
    };
    __decorate([
        trackValuesWithArguments("debug"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], JSMeetUp.prototype, "welcome", null);
    return JSMeetUp;
}());
var meetup = new JSMeetUp();
console.log(meetup.welcome("World", "Hello"));
