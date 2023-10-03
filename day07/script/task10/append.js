document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('listItem');
    const addButton = document.getElementById('addButton');

    addButton.addEventListener('click', function () {
      const inputValue = input.value.trim(); 

      if (inputValue) {
        const div = document.createElement('div');
        div.textContent = inputValue; 

        input.parentNode.insertBefore(div, input.nextSibling);

        input.value = '';
      }
    });
  });