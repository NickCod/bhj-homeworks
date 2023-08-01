let products = Array.from(document.querySelectorAll(".product"));

function Counter(elements) {
  let productValueElement = elements.querySelector(".product__quantity-value");

  let minusBtn = elements.querySelector(".product__quantity-control_dec"); 
  let plusBtn = elements.querySelector(".product__quantity-control_inc"); 

  minusBtn.addEventListener("click", () => {
    if (Number(productValueElement.textContent) > 0) {
      productValueElement.textContent--;
    }
  });

  plusBtn.addEventListener("click", () => {
    productValueElement.textContent++;
  });
}

products.forEach((product) => {
  Counter(product);
});

let addBtn = Array.from(document.querySelectorAll('.product__add'));
let cartProducts = document.querySelector('.cart__products');

addBtn.forEach(elem => {
  elem.addEventListener('click', event =>{
    event.preventDefault();
    let target = event.target;
    let product = target.closest('.product');
    let productId = product.dataset.id;
    let productImg = product.querySelector('.product__image').src;
    let productCount = product.querySelector('.product__quantity-value').textContent;
    let checkedId = document.querySelector('.cart__product[data-id="${productId}"]');
    if(checkedId === null){
        cartProducts.innerHTML += `
        <div class="cart__product" data-id=${productId}>
        <img class="cart__product-image" src=${productImg}>
        <div class="cart__product-count">${productCount}</div>
        </div>
        `
    } else {
      let currentCount = checkedId.querySelector('.cart__product-count').innerHTML;
      let sum = Number(currentCount) + Number(productCount);
      checkedId.querySelector('.cart__product-count').innerHTML = sum;
    }
  })
})