let minus = Array.from(
  document.querySelectorAll(".product__quantity-control_dec")
);
let plus = Array.from(
  document.querySelectorAll(".product__quantity-control_inc")
);
let productValue = Array.from(
  document.querySelectorAll(".product__quantity-value")
);
let products = Array.from(document.querySelectorAll(".product"));

function Counter(elements) {
 let dataIdValue = elements.dataset.id;
  minus.forEach((element) => {
    element.addEventListener("click", () => {
      productValue.forEach((item) => {
        if (Number(item.textContent) > 0) {
           let items = item[dataIdValue];
          items.textContent--;
        }
      });
    });
  });
  plus.forEach((element) => {
    element.addEventListener("click", () => {
      productValue.forEach((item) => {
        item.textContent++;
      });
    });
  });
}

Counter(products);
