const storedText = localStorage.getItem('text');
const textarea = document.querySelector('textarea');

if (storedText) {
textarea.textContent = storedText;
}   textarea.addEventListener('input', function () {
    const text = textarea.value;
    localStorage.setItem('text', text);
  });

