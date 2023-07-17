 const right = document.querySelector('.slider__arrow_next');
const left = document.querySelector('.slider__arrow_prev');
const slider_item = Array.from(document.querySelectorAll('.slider__item'));

const slider_items = Array.from(document.querySelectorAll('.slider__item'));
let activeIndex = 0;

right.onclick = function clickRight() {
    console.log("Нажат правый слайдер");
    slider_items[activeIndex].classList.remove('slider__item_active'); //первая картинка перестает быть активной
    activeIndex = (activeIndex + 1) % slider_items.length; // 
    slider_items[activeIndex].classList.add('slider__item_active');
}

left.onclick = function clickLeft() {
    console.log("Нажат левый слайдер");
    slider_items[activeIndex].classList.remove('slider__item_active');
    activeIndex = (activeIndex - 1 + slider_items.length) % slider_items.length;
    slider_items[activeIndex].classList.add('slider__item_active');
}
