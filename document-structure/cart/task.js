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



function addItem (items){
let buttonToAdd = items.querySelector('.product__add');
};
products.forEach((product) => {
  addItem(product);
});
