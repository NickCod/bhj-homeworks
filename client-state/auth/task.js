(() => {
  const authForm = document.getElementById('signin__form');
  
  authForm.addEventListener('submit', function(event) {
    console.log('Submit event fired');
      event.preventDefault();
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
      xhr.onreadystatechange = () => {
          if (xhr.status >= 400) {
              console.warn('Произошла ошибка при передачи данных!');
              return;
          }
          if (xhr.readyState === xhr.DONE) {
              const response = JSON.parse(xhr.response);
              if (response.success) {
                  showWelcome(response.user_id);
              } else {
                  alert('Неверный логин/пароль');
              }
          }
      };
      
      const formData = new FormData(this);
      xhr.send(formData);
      authForm.reset();
  });
  
  window.addEventListener('load', () => {
      const user_id = JSON.parse(localStorage.getItem('user_id'));
      if (user_id) {
          showWelcome(user_id);
      }
  });
  
  function showWelcome(id) {
      authForm.parentElement.classList.remove('signin_active');
      const welcomeBlock = document.getElementById('welcome');
      welcomeBlock.classList.add('welcome_active');
      welcomeBlock.innerHTML = `Добро пожаловать, пользователь #<span id="user_id">${id}</span>`;
  }
  
  });
