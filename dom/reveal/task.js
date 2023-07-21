const revealElements = Array.from(document.getElementsByClassName("reveal"));
let currentIndex = 0;
function revealThis(elements) {
     let element = elements[currentIndex];
    const { top, bottom } = element.getBoundingClientRect();
    console.log(top, bottom);

    if (top < window.innerHeight && bottom > 0) {
        element.classList.add("reveal_active");
      currentIndex++
    }
  };


setInterval(() => {
  revealThis(revealElements);
}, 1000);

//ВСе работает исправно, но в конце появляется ошибка при чтении, 
//после того как второй элемент попадает в поле зрения 