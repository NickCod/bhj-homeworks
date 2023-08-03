let form = document.getElementById('tasks__form');
let remove = document.querySelector('.task__remove');
let taskCases = document.querySelectorAll('.task');
let parentCase = document.querySelector('.tasks__list');
let typeInput = document.getElementById('task__input');
let task_title = document.querySelectorAll('.task__title');

parentCase.addEventListener('click', (e) => {
      e.preventDefault();
      let task = e.target.closest('.task');
      task.remove();
  }
);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = typeInput.value;
    parentCase.innerHTML += 
    `
    <div class="task">
      <div class="task__title">
       ${value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    `;
    typeInput.value = '';
  });