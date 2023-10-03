document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll('p');
  
    paragraphs.forEach((paragraph) => {
      // Add "blue" class on hover
      paragraph.addEventListener('mouseenter', function () {
        paragraph.classList.add('blue');
      });
  
      // Remove "blue" class on mouse leave
      paragraph.addEventListener('mouseleave', function () {
        paragraph.classList.remove('blue');
      });
  
      // Toggle "highlighted" class on click
      paragraph.addEventListener('click', function () {
        paragraph.classList.toggle('highlighted');
      });
    });
  });
  