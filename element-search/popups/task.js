const modal = document.getElementById('modal_main');
function showModal () {
 modal.style.display ="block";
}

window.onload = showModal;

const close = document.querySelector('.modal__close');
 close.onclick = function closeModal() {
    modal.style.display ="none";
};

const success = document.querySelector(".show-success");
const modal_success = document.getElementById("modal_success");

success.onclick = function ShowSuccess () {
modal_success.style.display ="block";
}
const closeSuccess = document.querySelectorAll('.modal__close');

for ( let i = 0; i< closeSuccess.length; i++) {
  closeSuccess.onclick = function closeSModal() {
    modal.style.display = 'none';
    modal_success.style.display = 'none';
};
}

// каким образом тут можно применить Аrray.from или spread оператор?

// не понимаю каким образом сделать так, чтобы после всех итераций - нажать на крестик и закрыть все?