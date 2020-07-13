'use strict';

class Rectangle {
  constructor(length, width) {
    this.validate(length, width);

    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }

  calculatePerimeter() {
    return (this.length + this.width) * 2;
  }

  calculateDiagonalLength() {
    return Math.sqrt(this.length ** 2 + this.width ** 2);
  }

  hasBiggerArea(otherRectangle) {
    return this.calculateArea() > otherRectangle.calculateArea();
  }

  isEqual(otherRect) {
    if (!(otherRect instanceof Rectangle)) {
      return false;
    }
    return this.length === otherRect.length && this.width === otherRect.width;
  }

  isValidLength(n) {
    return !isNaN(n) && n > 0;
  }

  validate(length, width) {
    const errors = [];
    if (!this.isValidLength(length)) {
      errors.push('Invalid value for length, only positive value are allowed ');
    }
    if (!this.isValidLength(width)) {
      errors.push('Invalid value for width, only positive value are allowed ');
    }
    if (errors.length) {
      throw Error(errors);
    }
  }
}

const rect1 = new Rectangle(10, 5);
console.log(
  `rect1: area: ${rect1.calculateArea()}, perimeter: ${rect1.calculatePerimeter()}, diagonal: ${rect1.calculateDiagonalLength()}`
);

const rect2 = new Rectangle(6, 5);
console.log(
  `rect2: area: ${rect2.calculateArea()}, perimeter: ${rect2.calculatePerimeter()}, diagonal: ${rect2.calculateDiagonalLength()}`
);

// const rect3 = new Rectangle(-6, -7);
// console.log(rect3.calculateArea(), rect3.calculatePerimeter());

console.log(rect1.hasBiggerArea(rect2));
console.log(rect1.isEqual(rect2));
console.log(rect1.isEqual(new Rectangle(10, 5)));
console.log(rect1.isEqual({ length: 10, width: 5 }));

// super class

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}

const rect4 = new Rectangle(20, 5);
const square1 = new Square(10);

console.log(`rect4 area === square1 area`, rect4.calculateArea(), square1.calculateArea());
