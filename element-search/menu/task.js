let menuLinks = document.querySelectorAll('.menu__link');
let activeMenu = null;

for (let link of menuLinks) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const menuSub = link.parentElement.querySelector('.menu_sub');
    
    if (menuSub) {
      if (activeMenu && activeMenu !== menuSub) {
        activeMenu.classList.remove('menu_active');
      }
      
      menuSub.classList.toggle('menu_active');
      activeMenu = menuSub;
    }
  });
}
