const form = document.getElementById('signin__form');
const formData = new FormData(form);

let xhr = new XMLHttpRequest();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let login = document.querySelector('.control[name="login"]').value;
  let password = document.querySelector('.control[name="password"]').value;
   let storeId = localStorage.getItem('id');

  if (login === "demo" && password === "demo") {
    if(!storeId){
    let id = document.getElementById('user_id').textContent;
     let idStorage = localStorage.setItem('id', id);
    let welcome = document.getElementById('welcome');
    welcome.classList.add('welcome_active');
    welcome.textContent = "Добро пожаловать, пользователь #" + idStorage();
    [login, password].forEach((element) => element.value = '');
    }
  } else {
    alert('Неверный логин/пароль')
  }

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(formData);
});

window.onload = () => {
    let storedId = localStorage.getItem('id');
    if (storedId) {
      let welcome = document.getElementById('welcome');
      welcome.classList.add('welcome_active');
      welcome.textContent = "Добро пожаловать, пользователь #" + storedId;
    }
  };


  
