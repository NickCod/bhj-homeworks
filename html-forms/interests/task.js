let checkboxes = Array.from(document.querySelectorAll('.interest__check'));

for (const item of checkboxes) {
  item.addEventListener('change', () => {
    checkboxes.forEach(element => {
      element.checked = true;
    });
  });
}