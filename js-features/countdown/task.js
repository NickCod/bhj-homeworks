let intervalId = null;
const timer = document.getElementById("timer");

const TimerCounter = function () {
   timer.textContent -=1;
  if (timer.textContent === "0") {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
  }
}

 intervalId = setInterval(TimerCounter, 1000); // Получается здесь у нас хранится идентификатор конкретно этого таймаута ?

// Как получается так, что переменной intervalId присваивается какое то значение уже после того 
// как оно остановило функцию ?