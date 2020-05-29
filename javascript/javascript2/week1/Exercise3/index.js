// Image inserter
/*
Create a function that has two parameters: imageUrl and elementToAppendImageTo. 
The function should create a img tag using the imageUrl parameter. The function 
should then append the img to the elementToAppendImageTo - html element.
*/

function imageInserter(imageUrl, elementToAppendImageTo) {
  const image = document.createElement('img');
  image.src = imageUrl;
  elementToAppendImageTo.appendChild(image);
}

imageInserter('https://picsum.photos/536/354', document.querySelector('body'));
