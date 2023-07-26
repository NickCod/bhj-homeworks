let checkboxes = Array.from(document.querySelectorAll('.interest__check'));

checkboxes.forEach(element => {
  element.addEventListener('change', () => {
    if (element.checked === true) {
      element.closest('.interest').querySelectorAll('.interest__check').forEach(type => {
        type.checked = true;
      })
    } else {
      element.closest('.interest').querySelectorAll('.interest__check').forEach(type => {
        type.checked = false;
      })
    }
  })
})