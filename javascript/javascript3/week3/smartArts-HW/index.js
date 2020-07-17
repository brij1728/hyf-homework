'use strict';
/*
Lets make some art using classes
Lets create lots of circles in different sizes and colors on a webpage!

In HTML5 there is an elements called canvas. It works just like a real canvas. 
You can paint elements like lines, circles and much more to the canvas.

Paint a circle to a canvas element
First add the canvas element to your html. Now draw a circle on the canvas using js. 
Google is your friend here :)

When you have added a normal circle, try filling it out so it has a color. Again 
google time!

Class creation time!
Lets create a class called Circle. The circle should be used like this:

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#000000');
c1.draw();
Where the constructor should look like this: constructor(x, y, r, startAngle, 
endAngle, fillColor)

The circle should have one method: draw that draws the circle to the canvas. 
That means that creating an instance of the circle class will not draw the circle. 
Drawing the circle first happens when we call the draw method.

Test if the new class works by creating a circle and drawing it to the canvas. 
Try some different radiuses, positions and fill colors.

Now lets make art!
Every 100ms create a new circle class and draw that to the canvas.

The circle should have random x, y, radius and color. For giving the circle a 
random color what should we do?? We should google off course!

What if we wanted the canvas to have the same width and height of the screen?

Follow the mouse - optional
Instead of the circles just randomly appearing on the screen, make them appear 
around the cursor.
*/

// paint a circle
const canvas = document.querySelector('.myCanvas');
const width = (canvas.width = window.innerWidth); // canvas has the same width as screen
const height = (canvas.height = window.innerHeight); // canvas has the same height as screen

const context = canvas.getContext('2d');
const centerX = width / 6;
const centerY = height / 6;
const radius = 50;

// context.beginPath();
// context.arc(centerX, centerY, 100, 0, 2 * Math.PI, true);
// // context.lineTo(200, 106);
// // context.fillStyle = 'violet';
// context.fill();

// =====================using class ==================

// Class creation time!
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.fillColor);
    context.fillStyle = this.fillColor;
    context.fill();
    context.closePath();
  }

  clear() {
    const globalCompositeOperationOriginal = context.globalCompositeOperation;

    context.globalCompositeOperation = 'destination-out';
    context.beginPath();
    context.arc(this.x, this.y, this.r + 1, this.startAngle, this.endAngle, this.fillColor);
    context.fill();
    context.closePath();
    context.globalCompositeOperation = globalCompositeOperationOriginal;
  }
}

const c1 = new Circle(30, 30, 15, 0, 2 * Math.PI, 'purple');
const c2 = new Circle(100, 100, 25, 0, 2 * Math.PI, 'green');
const c3 = new Circle(200, 200, 50, 0, 2 * Math.PI, 'red');
c1.draw();
c2.draw();
c3.draw();

function drawRandomCircle() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const maxRadius = 20;
  const minRadius = 3;

  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let r = minRadius + Math.random() * (maxRadius - minRadius);
  const startAngle = 0;
  const endAngle = 2 * Math.PI;
  const fillColor = `rgb(${red},${green}, ${blue})`;
  const c4 = new Circle(x, y, r, startAngle, endAngle, fillColor);
  c4.draw();
  console.log(`Circle has been displayed`);

  setTimeout(() => {
    // c4.fillColor = '#fff';
    c4.clear();
  }, Math.max(500, Math.random() * 10000));
}

// now lets make art!
setInterval(() => {
  drawRandomCircle();
}, 500);
