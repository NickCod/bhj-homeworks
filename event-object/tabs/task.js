const tabs = Array.from(document.querySelectorAll(".tab"));
const content = Array.from(document.querySelectorAll(".tab__content"));

for (let i = 0; i < tabs.length; i++) {
  (function(index) {
    tabs[index].onclick = function() {
      // Закрываем все вкладки и скрываем все содержимое
      tabs.forEach((tab, tabIndex) => {
        if (tabIndex !== index) {
          tab.classList.remove("tab_active");
          content[tabIndex].classList.remove("tab__content_active");
        }
      });

      // Открываем текущую вкладку и её содержимое
      tabs[index].classList.add("tab_active");
      content[index].classList.add("tab__content_active");
    };
  })(i);
}
