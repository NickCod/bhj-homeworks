let modal = document.getElementById('subscribe-modal');
let modalClose = document.querySelector('.modal__close');

window.onload = function() {
  if (document.cookie.indexOf("name") === -1) {
    modal.classList.add('modal_active');
  }
  
  modalClose.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;
    target.closest('.modal').classList.remove('modal_active');
    let today = new Date();
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    let dayTomorrow = tomorrow;
    document.cookie = 'name=close; expires=' + dayTomorrow.toUTCString();
  });
}