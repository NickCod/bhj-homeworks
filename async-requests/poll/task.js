let btns = Array.from(document.querySelectorAll('button'));
let card = document.querySelector('.card');
let dialog = document.createElement('div');

dialog.classList.add('dialog');

card.addEventListener('click', (event) => {
  const btn = event.target.closest('button');
  if (btn) {
    if (!dialog.parentNode) {
      dialog.innerHTML = `
        <div class="dialog">
          <h1>Спасибо, ваш голос засчитан!</h1>
          <button class="remove">закрыть!</button>
        </div>
      `;
      card.appendChild(dialog);
    }
  }
});
card.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    dialog.remove();
  }
});

const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

pollAnswers.addEventListener('click', (event) => {
  const btn = event.target.closest('button');
  if (btn) {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);

          // Показываем сообщение "Спасибо за ваш отзыв"
          dialog.innerHTML = `
            <div class="dialog">
              <h1>Спасибо за ваш отзыв!</h1>
              <button class="remove">закрыть!</button>
            </div>
          `;
          card.appendChild(dialog);

          // Обновляем вопрос
          pollTitle.textContent = response.data.title;
          pollAnswers.innerHTML = '';

          // Добавляем новые ответы
          response.data.answers.forEach(answer => {
            const answerBtn = document.createElement('button');
            answerBtn.classList.add('poll__answer');
            answerBtn.textContent = answer;
            pollAnswers.appendChild(answerBtn);
          });
        } else {
          console.error('Ошибка запроса');
        }
      }
    });

    // Запрашиваем новый вопрос с сервера
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.send();
  }
});