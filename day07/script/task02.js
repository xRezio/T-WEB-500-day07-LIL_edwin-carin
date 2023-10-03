// task02.js

const whiteBox = document.querySelector('.exercice');

function getNameAndConfirm() {
  let name;
  
  while (!name) {
    name = prompt("What's your name?");
  }
  
  const confirmation = confirm(`Are you sure that "${name}" is your name?`);
  
  if (confirmation) {
    alert(`Hello ${name}!`);
    whiteBox.querySelector('div').textContent = `Hello ${name}!`;
  } else {
    getNameAndConfirm();
  }
}

whiteBox.addEventListener('click', () => {
  getNameAndConfirm();
});
