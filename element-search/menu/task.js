const menu_links = Array.from(document.getElementsByClassName("menu__link"));

for (let i = 0; i < menu_links.length; i++) {
  const link = menu_links[i];

  link.addEventListener("click", function (event) {
    const parent = link.closest('.menu__item');
    const submenu = parent.querySelector('.menu_sub');

    if (submenu) {
      event.preventDefault();
      parent.classList.toggle('menu_active');
    }
  });
}