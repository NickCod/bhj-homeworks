const rotators = Array.from(document.getElementsByClassName("rotator__case"));
let index = 0;

function changeRot(elements) {
  elements.forEach(element => {
    element.classList.remove('rotator__case_active')
  });

  let element = elements[index];
  element.classList.add("rotator__case_active");

let color = element.dataset.color;
element.style.color = color;

  index++;

  if (index === elements.length) {
    index = 0;
  }
}

setInterval(() => {
  changeRot(rotators);
}, 1000);
