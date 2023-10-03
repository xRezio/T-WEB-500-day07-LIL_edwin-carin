document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('button');
    const paragraphs = document.querySelectorAll('p');
  
    button.addEventListener('click', function () {
      paragraphs.forEach((paragraph) => {
        paragraph.style.display = 'none';
      });
    });
  });
  