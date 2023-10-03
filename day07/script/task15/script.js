document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('textInputForm');
    const tagForm = document.getElementById('tagForm');
    const searchForm = document.getElementById('searchForm');
    const bulletList = document.getElementById('bulletList');
    const searchTypeSelect = document.getElementById('searchType');
    const searchTextInput = document.getElementById('searchText');
    const searchTagsInput = document.getElementById('searchTags');
    const addTagButton = document.getElementById('addTagButton');

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

    tagForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const tagInput = document.getElementById('tag').value;
      const listItem = bulletList.lastElementChild;

      if (listItem) {
        const tagSpan = document.createElement('span');
        tagSpan.textContent = tagInput;
        tagSpan.classList.add('tag');
        listItem.appendChild(tagSpan);
        document.getElementById('tag').value = '';
      }
    });

    document.getElementById('searchButton').addEventListener('click', function () {
      const selectedType = searchTypeSelect.options[searchTypeSelect.selectedIndex].value;
      const searchText = searchTextInput.value.toLowerCase();
      const searchTags = searchTagsInput.value.toLowerCase().split(' ');

      const listItems = bulletList.getElementsByTagName('li');

      for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        const listItemText = listItem.textContent.toLowerCase();
        const listItemType = listItem.classList[0];
        const listItemTags = Array.from(listItem.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());

        const typeCondition = selectedType === 'all' || listItemType === selectedType;
        const textCondition = searchText === '' || listItemText.includes(searchText);
        const tagConditions = searchTags.length === 0 || searchTags.every(tag => listItemTags.includes(tag));

        if (typeCondition && textCondition && tagConditions) {
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