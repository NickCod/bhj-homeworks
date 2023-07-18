const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabs.length; i++) {
  (function(index) {
    tabs[index].onclick = function() {
      tabs[index].classList.toggle('tab_active');
      content[index].classList.toggle('tab__content_active');
    };
  })(i);
}