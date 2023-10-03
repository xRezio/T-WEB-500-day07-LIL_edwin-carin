    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById('textInputForm');
      const bulletList = document.getElementById('bulletList');

      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const textInput = document.getElementById('text').value;
        const typeSelect = document.getElementById('type');
        const selectedType = typeSelect.options[typeSelect.selectedIndex].value;

        
        const listItem = document.createElement('li');
        listItem.textContent = textInput;

       
        listItem.classList.add(selectedType);

        
        bulletList.appendChild(listItem);

        
        document.getElementById('text').value = '';
      });
    });