const TimerCounter = function () {
  const timer = document.getElementById("timer");
   timer.textContent -=1;
  if (timer.textContent === "0") {
    alert("Вы победили в конкурсе!");
    clearInterval(true);
  }
}

setInterval(TimerCounter, 1000);

/* const TimerCounter2 = function () {
    const timer = document.getElementById("timer");
    let seconds = parseInt(timer.textContent);
  
    seconds -= 1;
  
    if (seconds === 0) {
      clearInterval(intervalId);
      alert("Вы победили в конкурсе!");
    }
  
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    const timeString = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(remainingSeconds)}`;
    timer.textContent = timeString;
  };
  
  const intervalId = setInterval(TimerCounter2, 1000);
  
  function padNumber(number) {
    return String(number).padStart(2, "0");
  }
   */