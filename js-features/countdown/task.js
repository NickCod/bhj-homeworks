let intervalId = null;
const timer = document.getElementById("timer");

const TimerCounter = function () {
   timer.textContent -=1;
  if (timer.textContent === "0") {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
  }
}

 intervalId = setInterval(TimerCounter, 1000); 
