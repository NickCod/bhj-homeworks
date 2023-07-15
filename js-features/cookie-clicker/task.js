const count = document.getElementById("clicker__counter");
const coоkie = document.getElementById("cookie");
const speed = document.getElementById("speed__counter");

let prevClickTime = new Date;
let clickSpeed = 0;

cookie.onclick = function first () {
const currentTime = new Date;
const timeDifference = currentTime - prevClickTime;
if (timeDifference !== 0) {
 speed.textContent = clickSpeed = Number((1000 / timeDifference).toFixed(2));
}
count.textContent = Number(count.textContent)+1;
cookie.width = count.textContent % 2 === 0 ? 200 : 300;

prevClickTime = currentTime;
};

