"use strict";
/*
Intro: Export library of functions
Created by: Michael Ganesan
Date: 02/19/2018
Note:
*/
exports.__esModule = true;
var Rect = /** @class */ (function () {
    function Rect(x, y) {
        this.x = x;
        this.y = y;
    }
    Rect.prototype.getIPoint = function () {
        var myIPoint = { x: 10, y: 10 };
        return (myIPoint);
    };
    Rect.prototype.getArea = function () {
        return (this.x * this.y);
    };
    return Rect;
}());
exports.re = Rect;
