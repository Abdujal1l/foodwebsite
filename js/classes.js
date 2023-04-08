'use strict';

class Rectangel {
    constructor (height , width) {
        this.height = height ;
        this.width = width ;
    }

    calcArea() {
        return this.height * this.width ;
    }
}


class ColoredRectangelWithText extends Rectangel {
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}




// const square = new Rectangel(10,10);
// const long = new Rectangel(20, 100);

// console.log(square.calcArea());

// console.log(long.calcArea());

const div = new ColoredRectangelWithText(25 ,10, 'hello world', 'red');

div.showMyProps();
console.log(div.calcArea());