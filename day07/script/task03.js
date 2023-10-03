// task03.js

const whiteBox = document.querySelector('.exercice div');

let last42Chars = '';

document.addEventListener('keydown', (event) => {

  last42Chars += event.key;
  
  if (last42Chars.length > 42) {
    last42Chars = last42Chars.slice(-42);
  }
  whiteBox.textContent = last42Chars;
});
