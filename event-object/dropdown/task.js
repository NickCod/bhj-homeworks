const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__link'));
let index = null;
const value = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');

value.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownList.classList.toggle('dropdown__list_active');
});

for (let link of dropdownLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        value.textContent = link.textContent;
       dropdownList.classList.remove('dropdown__list_active');
    });
}