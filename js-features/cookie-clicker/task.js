const count = document.getElementById("clicker__counter");
const coоkie = document.getElementById("cookie");

const speed = document.getElementById("speed__counter");

cookie.onclick = function First () {
  count.textContent = Number(count.textContent)+1;
  if (count.textContent % 2 === 0) {
    cookie.width = 200;
  } else {
    cookie.width = 300;
  }
  const now = new Date();
  const seconds = now.getSeconds();
  speed.textContent = Number((count.textContent / seconds).toFixed(2));

};
