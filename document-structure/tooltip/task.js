/* Данные для текста подсказки берутся из атрибута title

Подсказки активируются классом tooltip_active */
let has_tooltip = Array.from(document.querySelectorAll('.has-tooltip'));
has_tooltip.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    let tool = document.createElement('div');
    let tooltipValue = element.getAttribute('title');
    tool.textContent = tooltipValue;
    tooltipValue.classList.toggle('toggle');
    element.classList.toggle('tooltip_active');
    toggle.classList.add('toggle');
 
    console.log()
  });
});

//Вообщем я одновременно пытаюсь создать новый объект
// добавить ему содержимое title и добавить новому объекту класс 
// togglle