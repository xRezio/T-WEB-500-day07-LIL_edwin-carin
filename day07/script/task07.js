document.addEventListener("DOMContentLoaded", function () {
    const messageBox = document.querySelector('.wrapper .exercice footer div');
    const acceptLink = document.querySelector('.wrapper .exercice footer div a');
  
    const cookiesAccepted = getCookie('acceptsCookies') === 'true';
  
    if (!cookiesAccepted) {
      messageBox.style.display = 'block';
      acceptLink.addEventListener('click', () => {
        setCookie('acceptsCookies', 'true', 1);
        messageBox.style.display = 'none';
  
        const secondMessageBox = document.createElement('div');
        secondMessageBox.innerHTML = 'You accepted cookies. <button>Delete the cookie</button>';
        document.querySelector('.wrapper .exercice section').appendChild(secondMessageBox);
  
        const deleteButton = secondMessageBox.querySelector('button');
        deleteButton.addEventListener('click', () => {
          deleteCookie('acceptsCookies');
          secondMessageBox.remove();
          messageBox.style.display = 'block';
        });
      });
    }
  });
  
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }
  
  function getCookie(name) {
    const cookieName = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return '';
  }
  
  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
  