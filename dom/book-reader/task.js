const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

fontSize.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();

    // Получаем значение атрибута 'data-size' текущего элемента
    const size = element.dataset.size;

    // Удаляем классы, связанные с размерами шрифта у элемента 'book'
    book.classList.remove("book_fs-small", "book_fs-big");

    // Добавляем класс в зависимости от размера шрифта
    if (size === "small") {
      book.classList.add("book_fs-small");
    } else if (size === "big") {
      book.classList.add("book_fs-big");
    }
    // Удаляем класс 'font-size_active' у всех элементов
    fontSize.forEach((item) => {
      item.classList.remove("font-size_active");
    });
    // Добавляем класс 'font-size_active' только текущему элементу
    element.classList.add("font-size_active");
  });
});

/*  первые клики все идет хорошо, потом элементы просто перестают слушаться 
и перестают реагировать  */