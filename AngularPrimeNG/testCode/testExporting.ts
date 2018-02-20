/*
Intro: Export library of functions
Created by: Michael Ganesan
Date: 02/19/2018
Note:
*/

interface IPoint {
    x: number;
    y: number;
}


interface IRect {
    x: number;
    y: number;
    getIPoint: () => IPoint;
    getArea: (x: IPoint) => number;

}


class Rect implements IRect {

    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

    }


    getIPoint(): IPoint {

        let myIPoint: IPoint = { x: 10, y: 10 };

        return (myIPoint);
    }

    getArea(): number {

        return (this.x * this.y);
    }
}


export { Rect as re, IRect, IPoint }

