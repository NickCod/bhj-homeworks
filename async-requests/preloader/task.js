/* https://students.netoservices.ru/nestjs-backend/slow-get-courses */

let img = document.getElementById('loader');
let wrapper = document.createElement('div');
let itemValue = document.getElementById('items');

const xhr = new XMLHttpRequest ();
xhr.addEventListener('readystatechange', ()=>{
if (xhr.readyState === xhr.DONE){
    img.classList.remove('loader_active');
    wrapper.textContent = xhr.responseText;
    wrapper.classList.add('item');       
    itemValue.append(wrapper);
}
})
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses")
xhr.send();

console.log(xhr.responseText);