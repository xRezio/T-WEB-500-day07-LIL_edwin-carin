// task01.js

const whiteBox = document.querySelector('.exercice');


let clickCount = 0;

whiteBox.addEventListener('click', () => {
  clickCount++;

  const footerDiv = whiteBox.querySelector('footer div');
  footerDiv.textContent = `${clickCount}`;
});