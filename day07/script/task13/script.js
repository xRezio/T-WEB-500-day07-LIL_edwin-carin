document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('textInputForm');
    const searchForm = document.getElementById('searchForm');
    const bulletList = document.getElementById('bulletList');
    const searchTypeSelect = document.getElementById('searchType');

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

    document.getElementById('searchButton').addEventListener('click', function () {
      const selectedType = searchTypeSelect.options[searchTypeSelect.selectedIndex].value;
      const listItems = bulletList.getElementsByTagName('li');

      for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        if (selectedType === 'all' || listItem.classList.contains(selectedType)) {
          listItem.classList.remove('hidden');
        } else {
          listItem.classList.add('hidden');
        }
      }
    });

    document.getElementById('resetButton').addEventListener('click', function () {
      const listItems = bulletList.getElementsByTagName('li');

      for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        listItem.classList.remove('hidden');
      }
    });
  });