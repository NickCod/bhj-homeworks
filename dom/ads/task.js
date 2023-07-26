const rotators = Array.from(document.getElementsByClassName("rotator__case"));
let index = 0;
let intervalId;

function changeRot(elements) {
  elements.forEach(element => {
    element.classList.remove('rotator__case_active')
  });

  let element = elements[index];
  element.classList.add("rotator__case_active");

  let color = element.dataset.color;
  element.style.color = color;

  let speed = parseInt(element.dataset.speed); // Объявляем speed внутри функции changeRot

  index++;
  if (index === elements.length) {
    index = 0;
  }
   clearInterval(intervalId);
   intervalId = setInterval(() => {
    changeRot(rotators);
  }, speed);
}

changeRot(rotators);