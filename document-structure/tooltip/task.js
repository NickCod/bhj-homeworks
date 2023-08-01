/* Данные для текста подсказки берутся из атрибута title

Подсказки активируются классом tooltip_active */
let tooltipBox;
has_tooltip.forEach((element) => {
    element.addEventListener('click', (e) => {

    let target = e.target;
    let title = target.getAttribute('title');

        let has_tooltip = Array.from(element.querySelectorAll('.has-tooltip'));
         has_tooltip.classList.add('.tooltip_active')
         has_tooltip.style.display = 'inline-block';
         has_tooltip.value = title;

        tooltipBox = document.createElement('div');
        tooltipBox.className = 'tooltip';
        tooltipBox.innerHTML = title;
        tooltipBox.style.display = 'block';
        document.body.append(tooltipBox);

    });
});

