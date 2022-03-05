const { CommonInstanceDependencies } = require("@babel/preset-env/lib/polyfills/corejs3/built-in-definitions");

// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return Math.PI * (this.radius * 2)
    }

    get area(){
        return Math.PI * Math.pow(this.radius, 2)
    }

    //////////////////////////////////////////////

    set diameter(diameter){
        this.radius =  diameter / 2
        return this.radius
    }

    set circumference(circumference){
        this.radius = (circumference / Math.PI) / 2
        return this.radius
    }

    set area(area){
        this.radius = Math.sqrt((area / Math.PI))
        return this.radius
    }
}

let circle = new Circle(6);

circle.diameter = 36;

console.log(circle.radius);

circle.circumference = 100;

console.log(circle.radius);

circle.area = 200

console.log(circle.radius);