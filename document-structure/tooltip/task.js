let tooltipsArr = document.querySelectorAll('.has-tooltip');
let tooltipBox;

tooltipsArr.forEach(elem => {
  elem.addEventListener('click', function(event) {
    event.preventDefault()
    let target = event.target
    let title = target.getAttribute('title');
 
    elem.classList.toggle('tooltip_active');
    elem.style.display = 'inline-block';

    tooltipBox = document.createElement('div');
    tooltipBox.className = 'tooltip';
    tooltipBox.innerHTML = title;
    tooltipBox.style.display = 'block';
    document.body.append(tooltipBox);

    let boxPosition = target.getBoundingClientRect();

    let left = boxPosition.left;
    if (left < 0) left = 0;

    let bottom = boxPosition.bottom + 2;



    tooltipBox.style.left = left + 'px';
    tooltipBox.style.top = bottom + 'px';
  })
})
