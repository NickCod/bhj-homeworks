let btn = document.querySelector('tasks__add');
let remove = document.querySelector('.task__remove');
let taskCases = document.querySelectorAll('.task');
let parentCase = document.querySelector('.tasks__list');
let typeInput = document.getElementById('task__input');
let index = 0;
remove.addEventListener('click', () => {
    taskCases.forEach((taskCase) => {
      taskCase.style.display = 'none'; 
    });
  });

btn.addEventListener('click', (e) => {
  e.preventDefault();
  parentCase.textContent = typeInput.value;
  parentCase.cloneNode(true);
});