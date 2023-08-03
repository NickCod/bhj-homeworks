let img = document.getElementById('loader');
let wrapper = document.createElement('div');
let itemValue = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    img.classList.remove('loader_active');
    const response = JSON.parse(xhr.responseText);
    const valute = response.response.Valute;

    for (const key in valute) {
      const charCode = valute[key].CharCode;
      const value = valute[key].Value;

      const itemWrapper = document.createElement('div');
      itemWrapper.textContent = `${charCode}: ${value}`;
      itemWrapper.classList.add('item');

      itemValue.appendChild(itemWrapper);
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();